/* DESKTOP */

const featuresMenuItem = document.querySelector("#features-menu-item");
const featuresDropdown = document.querySelector("#features-dropdown");
const companyMenuItem = document.querySelector("#company-menu-item");
const companyDropdown = document.querySelector("#company-dropdown");

const mouseLeaveDelay = 100;

const toggleDropdown = (dropdownId) => {
  const dropdown = document.querySelector(`#${dropdownId}`);
  dropdown.classList.toggle("hidden");
};

const setupDropdownEventListeners = () => {
  const addDropdownEventListeners = (menuItem, dropdown) => {
    let dropdownTimeout;

    menuItem.addEventListener("mouseenter", () => {
      clearTimeout(dropdownTimeout);
      dropdown.classList.remove("hidden");
    });

    menuItem.addEventListener("mouseleave", () => {
      dropdownTimeout = setTimeout(
        () => dropdown.classList.add("hidden"),
        mouseLeaveDelay
      );
    });
  };

  addDropdownEventListeners(featuresMenuItem, featuresDropdown);
  addDropdownEventListeners(companyMenuItem, companyDropdown);
};

document.addEventListener("DOMContentLoaded", () =>
  setupDropdownEventListeners()
);


/* MOBILE */

const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
const dialog = document.querySelector("dialog");
const dialogCloseBtn = document.querySelector("#dialog-close-btn > button");
const mobileFeaturesMenuItem = document.querySelector("#features-menu-item-mobile");
const mobileFeaturesDropdown = document.querySelector("#features-dropdown-mobile");
const mobileCompanyMenuItem = document.querySelector("#company-menu-item-mobile");
const mobileCompanyDropdown = document.querySelector("#company-dropdown-mobile");

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

const toggleMobileDropdown = (el) => el.classList.toggle("hidden");

mobileFeaturesMenuItem.addEventListener("click", () => toggleMobileDropdown(mobileFeaturesDropdown));
mobileCompanyMenuItem.addEventListener("click", () => toggleMobileDropdown(mobileCompanyDropdown));

dialog.onclose(() => hideMobileDropdowns());
