import React from 'react';
import {render} from 'react-dom';

import Routers from './Router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import 'highlight.js/styles/github.css';
import './post.css';

render(<Routers />,document.getElementById('root'));
