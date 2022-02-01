import React from 'react';

function Footer() {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Contacts</h2>
              <nav class="list-none mb-10">
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white">Email - shubhmtiwri00@gmail.com</a>
                </li>
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white">Phone - +91 9627253516</a>
                </li>
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white">Whatsapp - +91 8266943516</a>
                </li>
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white" href='https://www.instagram.com/s_h.u_b.h_a.m_2k99/' target='_blank'>Instagram - s_h.u_b._h.a_m_2k99</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Profile</h2>
              <nav class="list-none mb-10">
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white">Universite - Quantum University</a>
                </li>
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white" href='https://github.com/ShubhamTiwari909/' target='_blank'>Github</a>
                </li>
                <li className='my-5'>
                  <a class="text-gray-400 hover:text-white" href=' https://www.linkedin.com/in/shubham-tiwari-b7544b193/' target='_blank'>LinkedIn </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Blog</h2>
              <nav class="list-none mb-10">
                <li className='py-5'>
                  <a class="text-gray-400 hover:text-white" href=' https://dev.to/shubhamtiwari909' target='_blank'>Blog Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label for="footer-field" class="leading-7 text-sm text-gray-400">Email</label>
                <input placeholder='email...' type="text" id="footer-field" name="footer-field" class="w-full bg-gray-800 bg-opacity-40 
                rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent 
                focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Send</button>
            </div>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-gray-400" href='https://www.facebook.com/profile.php?id=100008727573313' target='_blank'>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400" href='https://www.instagram.com/s_h.u_b.h_a.m_2k99/' target='_blank'>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400" href=' https://www.linkedin.com/in/shubham-tiwari-b7544b193/' target='_blank'>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-400 text-sm text-center sm:text-left">Copyrights©2022 PhotoGlob</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
