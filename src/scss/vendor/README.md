# Vendors

Most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks - Normalize, Bootstrap, jQueryUI, Carousels, Sliders ...and so on. Putting those in the same folder is a good way to separate them from your code and make support and updates an easier task.

If you have to override a section of a vendor, you could create an 8th folder called `vendors-extensions/` where you may have files named exactly after those of the vendors they overwrite. For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap's default CSS. This is to avoid editing the vendor files directly, which is almost always a bad idea.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Vendors Folder](http://sass-guidelin.es/#vendors-folder)
