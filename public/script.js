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
      dropdownTimeout = setTimeout(() => dropdown.classList.add("hidden"), mouseLeaveDelay);
    });
  };

  addDropdownEventListeners(featuresMenuItem, featuresDropdown);
  addDropdownEventListeners(companyMenuItem, companyDropdown);
};

document.addEventListener("DOMContentLoaded", () => setupDropdownEventListeners());
