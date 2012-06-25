/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */

////////////////////////////////////////////////////////////////////////
//

var Montage = 		        require("montage/core/core").Montage,
    Component = 	require("montage/ui/component").Component;

var CssClipboardAgent = exports.CssClipboardAgent = Montage.create(Component, {

    copy:{
        value: function(clipboardEvent){

        }
    },

    cut:{
        value:function(clipboardEvent){

        }

    },

    pasteFromCopy:{
        value:function(){

        }
    },

    pasteFromCut:{
          value:function(){

          }
    }

});