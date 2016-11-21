/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2016, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define(function () {
    function InspectorController(selection, navigation, region, factory) {
        this.selection = selection;
        this.navigation = navigation;
        this.region = region;
        this.factory = factory;
        this.active = false;
        this.onChange = this.onChange.bind(this);
    }

    InspectorController.prototype.onChange = function () {
        var view = this.factory(this.navigation.get(), this.selection.get());
        this.region.show(view);
    };

    InspectorController.prototype.activate = function () {
        if (this.active) {
            return;
        }
        this.selection.off('change', this.onChange);
        this.navigation.off('change', this.onChange);
    };

    InspectorController.prototype.deactivate = function () {
        if (!this.active) {
            return;
        }
        this.selection.off('change', this.onChange);
        this.navigation.off('change', this.onChange);
    };

    return InspectorController;
});