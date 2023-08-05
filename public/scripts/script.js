/* DESKTOP */

const featuresMenuItem = document.querySelector("#features-menu-item");
const featuresDropdown = document.querySelector("#features-dropdown");
const companyMenuItem = document.querySelector("#company-menu-item");
const companyDropdown = document.querySelector("#company-dropdown");

const mouseLeaveDelay = 100;

const setupDropdownEventListeners = () => {
  const addDropdownEventListeners = (menuItem, dropdown) => {
    let dropdownTimeout;
    const arrow = menuItem.querySelector("img");

    menuItem.addEventListener("mouseenter", () => {
      clearTimeout(dropdownTimeout);
      arrow.src = `./assets/images/icon-arrow-up.svg`;
      dropdown.classList.remove("hidden");
    });

    menuItem.addEventListener("mouseleave", () => {
      dropdownTimeout = setTimeout(
        () => {
          dropdown.classList.add("hidden");
          arrow.src = `./assets/images/icon-arrow-down.svg`;
        },
        mouseLeaveDelay
      );
    });
  };

  addDropdownEventListeners(featuresMenuItem, featuresDropdown);
  addDropdownEventListeners(companyMenuItem, companyDropdown);
};

document.addEventListener("DOMContentLoaded", () => {
  setupDropdownEventListeners()
});

/* MOBILE */
const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
const dialog = document.querySelector("dialog");
const dialogInner = document.querySelector("#dialog-inner");
const dialogCloseBtn = document.querySelector("#dialog-close-btn > button");
const mobileFeaturesMenuItem = document.querySelector("#features-menu-item-mobile");
const mobileFeaturesDropdown = document.querySelector("#features-dropdown-mobile");
const mobileCompanyMenuItem = document.querySelector("#company-menu-item-mobile");
const mobileCompanyDropdown = document.querySelector("#company-dropdown-mobile");

// Menu toggle
const toggleMobileMenu = () => dialog.showModal();

mobileMenuBtn.addEventListener("click", () => toggleMobileMenu());

const hideMobileDropdowns = () => {
  mobileFeaturesDropdown.classList.add("hidden");
  mobileCompanyDropdown.classList.add("hidden");
};

dialogCloseBtn.addEventListener("click", () => {
  dialog.close();
  hideMobileDropdowns();
});

// Dropdowns toggle
const toggleMobileDropdown = (el) => {
  el.classList.toggle("hidden");
};

const toggleArrows = (el) => {
  const path = "./assets/images/icon-arrow-";
  const format = ".svg";
  if (el.src.includes("down")) el.src = `${path}up${format}`;
  else el.src = `${path}down${format}`;
}

const handleClick = (menuItem, dropdown) => {
  const arrow = menuItem.querySelector("img");
  toggleMobileDropdown(dropdown);
  toggleArrows(arrow);
}

mobileFeaturesMenuItem.addEventListener("click", () => {
  handleClick(mobileFeaturesMenuItem, mobileFeaturesDropdown)
});

mobileCompanyMenuItem.addEventListener("click", () => {
  handleClick(mobileCompanyMenuItem, mobileCompanyDropdown)
});

// Outclick closing
document.addEventListener("click", (e) => {
  const clickedOutside = !dialogInner.contains(e.target) && !mobileMenuBtn.contains(e.target);
  if (clickedOutside) {
    dialog.close();
    hideMobileDropdowns();
  }
});

dialog.addEventListener("close", () => hideMobileDropdowns());
