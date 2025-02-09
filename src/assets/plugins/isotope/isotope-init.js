(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        // Initialize Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
        });

        // Get Isotope instance AFTER initialization
        var iso = $grid.data('isotope');
        var $filterCount = $('.filter-count');

        // Ensure Isotope is initialized before accessing `filteredItems`
        function updateFilterCount() {
            if (!iso || !iso.filteredItems) {
                console.error('Isotope is not initialized yet.');
                return;
            }
            $filterCount.text(iso.filteredItems.length);
        }

        // Call after Isotope is initialized
        $grid.on('arrangeComplete', function(event, filteredItems) {
            $filterCount.text(filteredItems.length);
        });

        // Bind filter button click
        $('.filters-button-group .button').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // Ensure Isotope layouts after images load
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });

    });

})(jQuery);
