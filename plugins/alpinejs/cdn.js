(() => {
  // src/js/plugin/accordion.js
  function accordion_default(Alpine) {
    Alpine.directive("accordion", (el, { value }) => {
      if (value === "item") handleItem(Alpine, el);
      else if (value === "item-trigger") handleItemTrigger(Alpine, el);
      else if (value === "item-content") handleItemContent(Alpine, el);
      else handleRoot(Alpine, el);
    }).before("bind");
  }
  function handleRoot(Alpine, el) {
    Alpine.bind(el, {
      "x-data"() {
        return {
          activeAccordion: null,
          setActiveAccordion(accordion) {
            this.activeAccordion = this.activeAccordion == accordion ? null : accordion;
          }
        };
      }
    });
  }
  function handleItem(Alpine, el) {
    Alpine.bind(el, {
      "x-id"() {
        return ["accordion-item"];
      },
      ":id"() {
        return this.$id("accordion-item");
      },
      "x-data"() {
        return {
          accordion: this.$id("accordion-item"),
          get active() {
            return this.accordion === this.activeAccordion;
          }
        };
      }
    });
  }
  function handleItemTrigger(Alpine, el) {
    Alpine.bind(el, {
      "@click"() {
        this.setActiveAccordion(this.accordion);
      }
    });
  }
  function handleItemContent(Alpine, el) {
    Alpine.bind(el, {
      style: { display: "none" },
      "x-show"() {
        return this.activeAccordion === this.accordion;
      }
    });
  }

  // src/js/plugin/dropdown.js
  function dropdown_default(Alpine) {
    Alpine.directive("dropdown", (el, { value, modifiers }) => {
      if (!value) handleRoot2(Alpine, el);
      else if (value === "trigger") handleTrigger(Alpine, el);
      else if (value === "menu") handleMenu(Alpine, el, modifiers);
    });
  }
  function handleRoot2(Alpine, el) {
    Alpine.bind(el, {
      "x-id"() {
        return ["dropdown-trigger", "dropdown-menu"];
      },
      "x-data"() {
        return {
          isOpen: false
        };
      }
    });
  }
  function handleTrigger(Alpine, el) {
    Alpine.bind(el, {
      ":id"() {
        return this.$id("dropdown-trigger");
      },
      "@click"() {
        this.isOpen = !this.isOpen;
      },
      "aria-haspopup": "true",
      ":aria-expanded"() {
        return this.isOpen.toString();
      }
    });
  }
  function handleMenu(Alpine, el, modifiers) {
    let positions = [
      "top",
      "top-start",
      "top-end",
      "right",
      "right-start",
      "right-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "left",
      "left-start",
      "left-end"
    ];
    let placement = positions.find((i) => modifiers.includes(i));
    let defaultClasses = "";
    let transitionClasses = {
      "x-transition:enter": "transition ease-out duration-200",
      "x-transition:enter-start": "transform opacity-0 scale-95",
      "x-transition:enter-end": "transform opacity-100 scale-100",
      "x-transition:leave": "transition ease-in duration-75",
      "x-transition:leave-start": "transform opacity-100 scale-100",
      "x-transition:leave-end": "transform opacity-0 scale-95"
    };
    Alpine.bind(el, {
      class: `${defaultClasses}`,
      style: { display: "none" },
      ":id"() {
        return this.$id("dropdown-menu");
      },
      [`x-anchor${placement ? "." + placement : ""}.offset.10`]() {
        return document.getElementById(this.$id("dropdown-trigger"));
      },
      "x-show"() {
        return this.isOpen;
      },
      "@click.outside"() {
        this.isOpen = false;
      },
      ...transitionClasses
    });
  }

  // src/js/plugin/layout.js
  function layout_default(Alpine) {
    Alpine.store("settings", {
      panel: {
        isOpen: false,
        open(cp) {
          this.isOpen = true;
          if (typeof cp == "function") {
            cp();
          }
        },
        close() {
          this.isOpen = false;
        }
      },
      darkMode: {
        value: false,
        setValue(value) {
          this.value = value;
          window.localStorage.setItem("dark", value);
          document.dispatchEvent(new CustomEvent("scheme:changed", {}));
        },
        getValue() {
          if (window.localStorage.getItem("dark")) {
            return JSON.parse(window.localStorage.getItem("dark"));
          }
          return !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        },
        toggle() {
          this.value = !this.value;
          this.setValue(this.value);
        }
      },
      colors: {
        selectedColor: "cyan",
        availableColors: ["cyan", "teal", "green", "fuchsia", "blue", "violet"],
        getColor() {
          if (window.localStorage.getItem("color")) {
            return window.localStorage.getItem("color");
          }
          return this.selectedColor;
        },
        setColor(color) {
          const root = document.documentElement;
          root.style.setProperty("--color-primary", `var(--color-${color})`);
          root.style.setProperty("--color-primary-50", `var(--color-${color}-50)`);
          root.style.setProperty("--color-primary-100", `var(--color-${color}-100)`);
          root.style.setProperty("--color-primary-light", `var(--color-${color}-light)`);
          root.style.setProperty("--color-primary-lighter", `var(--color-${color}-lighter)`);
          root.style.setProperty("--color-primary-dark", `var(--color-${color}-dark)`);
          root.style.setProperty("--color-primary-darker", `var(--color-${color}-darker)`);
          this.selectedColor = color;
          window.localStorage.setItem("color", color);
          document.dispatchEvent(new CustomEvent("colors:changed", {}));
        }
      },
      init() {
        this.darkMode.setValue(this.darkMode.getValue());
        this.colors.setColor(this.colors.getColor());
      }
    });
    Alpine.store("panels", {
      search: {},
      notifications: {}
    });
    Alpine.data("setup", () => {
      return {
        init() {
          this.$refs.loading?.classList.add("hidden");
        },
        loading: true,
        isSidebarOpen: true,
        isNotificationsPanelOpen: false,
        openNotificationsPanel() {
          this.isNotificationsPanelOpen = true;
          this.$nextTick(() => {
            this.$refs.notificationsPanel.focus();
            if (this.isMobileSubMenuOpen) this.isMobileSubMenuOpen = false;
          });
        },
        isSearchPanelOpen: false,
        openSearchPanel() {
          this.isSearchPanelOpen = true;
          this.$nextTick(() => {
            this.$refs.searchInput.focus();
            if (this.isMobileSubMenuOpen) this.isMobileSubMenuOpen = false;
          });
        },
        isMobileSubMenuOpen: false,
        openMobileSubMenu() {
          this.isMobileSubMenuOpen = true;
          this.$nextTick(() => {
            this.$refs.mobileSubMenu.focus();
          });
        },
        isMobileMainMenuOpen: false,
        openMobileMainMenu() {
          this.isMobileMainMenuOpen = true;
          this.$nextTick(() => {
            this.$refs.mobileMainMenu.focus();
          });
        }
      };
    });
  }

  // src/js/plugin/index.js
  function plugin_default(Alpine) {
    accordion_default(Alpine);
    dropdown_default(Alpine);
    layout_default(Alpine);
  }

  // src/plugins/alpinejs/builds/cdn.js
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(plugin_default);
  });
})();
