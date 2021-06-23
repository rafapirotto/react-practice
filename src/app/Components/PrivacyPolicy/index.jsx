import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { isAuthenticated } from '../../utils';

const PrivacyPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  const marginTop = isAuthenticated() ? '' : 'mt-36';

  return (
    <div className="flex flex-col w-full px-40 py-20">
      <div className={`text-4xl font-normal mb-10 ${marginTop}`}>Privacy Policy</div>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor blandit consectetur a vivamus
        maximus. Congue lorem vulputate dictumst; vel mollis tristique eros. Libero himenaeos
        finibus gravida rutrum tempus dui. Efficitur facilisi praesent nibh, viverra convallis
        consectetur. Blandit tellus vitae proin urna volutpat proin risus. Volutpat donec tempor vel
        fusce. Aenean rutrum euismod tincidunt efficitur aliquet. Scelerisque aenean posuere magna
        sagittis ridiculus tincidunt viverra. At ex felis tristique sapien. Scelerisque odio mauris
        ultrices eleifend tristique nisi. Commodo ex amet conubia hac. Aptent nostra iaculis luctus;
        nibh dapibus sed. Augue donec proin lectus hac condimentum. Tristique nullam arcu urna
        egestas arcu libero. Scelerisque potenti laoreet senectus per. Id potenti mus tristique
        praesent aenean. Maecenas dictum interdum rutrum euismod dapibus sagittis diam. Pretium
        libero montes platea curabitur in quis velit. Erat aenean potenti venenatis scelerisque nibh
        nullam. Quisque laoreet ut fringilla pretium neque eros ultrices. Neque enim nibh; rhoncus
        luctus congue lobortis. Magna eget netus per class interdum vestibulum? Integer viverra a
        mus nascetur leo. Rhoncus commodo urna vulputate fermentum. Hendrerit tempus quam conubia
        hac. Placerat maecenas egestas porta erat curae quisque duis. Consequat morbi a risus
        condimentum proin facilisis. Nascetur netus posuere porta dui. Lobortis suspendisse a sed
        placerat vestibulum nisi. Vulputate ligula sapien felis aenean ad. Montes nibh sociosqu
        adipiscing lacus sit commodo. Est senectus turpis malesuada ornare. Nostra semper sociosqu
        consequat duis? Cubilia id vulputate potenti dolor feugiat. Gravida justo nulla venenatis
        netus vitae. Nulla finibus volutpat aliquam at vitae purus. Convallis pellentesque enim
        senectus augue fusce. Molestie pellentesque elit nunc molestie. Accumsan donec egestas
        platea viverra. Malesuada purus inceptos; et vehicula iaculis tincidunt. Varius magna nisl
        curae posuere tortor consectetur. Accumsan imperdiet tortor nisi class ac. Vehicula justo
        placerat tristique penatibus felis! Taciti purus magna mus ligula. Odio lacinia ultrices
        suspendisse rhoncus maecenas. Odio purus potenti suscipit urna taciti. Egestas potenti
        consequat accumsan. Molestie praesent torquent urna massa hac. Vel tempor magnis netus
        cursus. Adipiscing varius adipiscing commodo tincidunt.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
