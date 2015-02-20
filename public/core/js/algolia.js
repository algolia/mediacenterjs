// JS for Algolia search using twitter-typeahead
$(document).ready(function() {
    
    // Algolia ID initialization
    var algolia = new AlgoliaSearch('W3MZMSMDQ3', '6f661ee43b0906732599d0fe02243119');
    
    // Algolia Index Initialization
    var index = algolia.initIndex('test_drive_songs');
    
    
    // typeahead.js initialization
    $('#user-search').typeahead({ hint: false }, {
        source: index.ttAdapter({ hitsPerPage: 5 }),
        displayKey: 'trackName',
        templates: {
            suggestion: function(hit) {
                // render the hit
                return '<div class="hit">' +
                    '<div class="name">' +
                    hit._highlightResult.trackName.value + 
                    '</div>' +
                    '</div>';
            }
        }
    });
});