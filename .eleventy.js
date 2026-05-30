module.exports = function(eleventyConfig) {

  // Passthrough copy tells Eleventy NOT to process this folder —
  // just copy it as-is into the output folder (_site).
  // This is important for the CMS: the admin/ folder contains
  // index.html and config.yml which Sveltia needs to find at
  // yoursite.com/admin/ — Eleventy shouldn't touch them.
  eleventyConfig.addPassthroughCopy("src/admin");

  // Same deal for images — we don't want Eleventy transforming
  // uploaded images, just copying them to the output folder.
  eleventyConfig.addPassthroughCopy("src/images");

  // Pass the stylesheet through unchanged. Eleventy would ignore
  // .css files anyway, but being explicit here keeps things clear
  // and ensures it always lands at /style.css in the built site.
  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    // Tell Eleventy where source files live and where to put the build.
    // "input" is what you edit. "output" is what gets deployed.
    // Cloudflare Pages will serve everything from _site/.
    dir: {
      input: "src",       // your working files
      output: "_site",    // the built site Cloudflare Pages deploys
    }
  };
};