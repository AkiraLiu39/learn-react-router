import React from 'react';
import {ReactDOM,render} from 'react-dom';
import CustomLinkDemo from './customLink.js'
import PreventingTransitionDemo from './stopNavigation.js'
import NotMatchExample from './notMatchExample.js'
import RecusiveExample from './RecusiveExample.js'
import SiderbarExample from './SiderbarExample.js'
import AnimationExample from './AnimationExample.js'
import RouteConfigExample from './RouteConfigExample.js'
import ModalGalleryExample from './ModalGallery.js'
// render(<CustomLinkDemo /> ,document.getElementById('content'));
// render(<PreventingTransitionDemo />,document.getElementById('content'));
// render(<NotMatchExample /> ,document.getElementById('content'));
// render(<RecusiveExample /> ,document.getElementById('content'));
// render(<SiderbarExample /> ,document.getElementById('content'));
// render(<AnimationExample />,document.getElementById('content'));
// render(<RouteConfigExample />,document.getElementById('content'));
render(<ModalGalleryExample />,document.getElementById('content'));

