// src/utils/Helper.js (boleh kasih nama bebas)

import { useEffect } from "react";

// Komponen ScriptHandler
export function ScriptHandler() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    function toggleMenu() {
      nav?.classList.toggle("active");
    }

    if (hamburger) {
      hamburger.addEventListener("click", toggleMenu);
    }

    const button = document.querySelector(".account-button");
    const dropdown = document.getElementById("dropdownMenu");

    function toggleDropdown() {
      if (dropdown) {
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
      }
    }

    if (button) {
      button.addEventListener("click", toggleDropdown);
    }

    function handleClickOutside(event) {
      if (
        button &&
        dropdown &&
        !button.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.style.display = "none";
      }
    }

    document.addEventListener("click", handleClickOutside);

    const cards = document.querySelectorAll(".media-card-medpart");
    cards.forEach((card, index) => {
      if (index >= 8) {
        card.style.display = "none";
      }
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (hamburger) hamburger.removeEventListener("click", toggleMenu);
      if (button) button.removeEventListener("click", toggleDropdown);
    };
  }, []);

  return null;
}

export const mediaData = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Headline ${i + 1}`,
  image: "/src/assets/images/logoDiskominfo.png",
  description: Array.from({ length: 10 })
    .map((_, j) => `Description sentence ${j + 1} for item ${i + 1}.`)
    .join(" "),
  description2: Array.from({ length: 10 })
    .map((_, j) => `Second description sentence ${j + 1} for item ${i + 1}.`)
    .join(" "),
  author: `Penulis ${i + 1}`,
  releaseDate: `2024-04-${String((i % 30) + 1).padStart(2, "0")}`,
}));

export const mediaPartner = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Radar Ciamis",
    "Kominfo TV",
    "Berita Ciamis",
    "Info Wisata Ciamis",
    "Kuliner Khas Ciamis",
    "Event Ciamis",
    "Sejarah Ciamis",
    "Komunitas Ciamis",
    "Panduan Ciamis",
  ][i % 9],
}));
