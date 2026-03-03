import { useEffect } from "react";

function SEO({
  title,
  description,
  keywords,
  canonical,
  robots = "index, follow",
}) {
  useEffect(() => {
    // 1️⃣ Title
    if (title) {
      document.title = title;
    }

    // Helper function to set meta
    const setMetaTag = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2️⃣ Standard Meta
    if (description) setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);
    if (robots) setMetaTag("robots", robots);

    // 3️⃣ Canonical
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, keywords, canonical, robots]);

  return null;
}

export default SEO;