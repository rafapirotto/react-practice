// https://github.com/wojtekmaj/enzyme-adapter-react-17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });
