import React from "react";

const user = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1946" width="200" height="200"><path d="M516.4 517.4c125 0 226.7-101.7 226.7-226.7 0-18.5-15-33.4-33.4-33.4s-33.4 15-33.4 33.4c0 88.2-71.7 159.9-159.9 159.9s-159.9-71.7-159.9-159.9 71.7-159.9 159.9-159.9c22.7 0 44.6 4.6 65.1 13.8 16.8 7.5 36.6 0 44.1-16.9 7.5-16.8 0-36.6-16.9-44.1-29.2-13-60.2-19.6-92.4-19.6-125 0-226.7 101.7-226.7 226.7s101.8 226.7 226.8 226.7zM619.8 556.8H413c-155.8 0-282.5 126.7-282.5 282.5v55.5c0 18.5 15 33.4 33.4 33.4s33.4-15 33.4-33.4v-55.5c0-118.9 96.8-215.7 215.7-215.7h206.7c118.9 0 215.7 96.8 215.7 215.7v55.5c0 18.5 15 33.4 33.4 33.4 18.5 0 33.4-15 33.4-33.4v-55.5c0.1-155.8-126.6-282.5-282.4-282.5z" fill="#4D4D4D" p-id="1947"></path><path d="M674.7 190.9m-33.4 0a33.4 33.4 0 1 0 66.8 0 33.4 33.4 0 1 0-66.8 0Z" fill="#4D4D4D" p-id="1948"></path></svg>`;

const article = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5615" data-spm-anchor-id="a313x.search_index.0.i0.25d33a81ntZIpp" width="200" height="200"><path d="M609.46422 510.678924c4.427929-84.426062-17.114243-173.485848-70.433607-229.082243-94.740746-99.289828-157.110146-183.033776-213.967871-255.654794-20.660901-26.375053-60.208545-35.32717-97.494094-14.170036-37.285549 21.256713-48.596019 58.940577-37.773484 90.825647 25.770943 75.8706 67.286924 174.370438 110.278327 314.208674 22.624259 73.211851 80.766548 134.416182 160.35143 182.82964l149.039299-88.956888zM408.48472 203.558587c2.457932 3.44542 3.246263 7.67917 2.262094 12.00752a17.588901 17.588901 0 0 1-7.181278 10.724616c-3.44376 2.364992-7.378775 3.546658-11.312129 3.35082a16.928363 16.928363 0 0 1-3.150003-0.298736c-3.737517-0.788331-6.884201-2.950846-9.051696-5.905011L271.052966 73.173679c-5.015442-7.081699-2.950846-17.417958 4.822924-22.924655 4.32669-2.854587 9.537971-4.034593 14.360894-2.954165a14.98658 14.98658 0 0 1 9.247534 5.905011l109.002061 150.358717z" fill="currentColor" p-id="5616" data-spm-anchor-id="a313x.search_index.0.i1.25d33a81ntZIpp" ></path><path d="M491.807118 659.17552c3.151663 5.707514 8.660019 9.343793 14.857128 10.724616 6.195449 1.377504 13.084629 0.393335 19.1805-3.249582l111.167896-66.321011c12.392558-7.086677 17.114243-21.943806 10.721296-33.259255-6.588784-11.320428-21.741329-14.664609-34.133886-7.577931l-111.167896 66.518508c-12.392558 6.987099-17.215481 21.849206-10.625038 33.164655z" fill="currentColor" p-id="5617" data-spm-anchor-id="a313x.search_index.0.i2.25d33a81ntZIpp"></path><path d="M261.914969 1024c-10.859047 0-19.607028-16.579838-19.607027-37.169374 0-20.397018 8.747981-37.182652 19.607027-37.182652h339.529854c10.759468 0 19.509109 16.589796 19.509109 37.182652 0 20.589536-8.74964 37.169374-19.509109 37.169374h-339.529854z" fill="currentColor" p-id="5618"></path><path d="M554.692668 867.727974c39.51611 67.544169 177.963566 46.954632 235.873504 146.131605l10.05412-5.77224-88.475592-151.59847c-20.811929 3.286094-43.535767-7.357199-55.903429-28.446289-15.379916-26.461355-8.646742-59.086626 15.384894-72.715617 23.928739-13.628992 55.800532-3.282775 71.285005 23.276499 12.767637 21.78282 10.152039 47.548784-4.325031 63.663922l88.077278 150.997679 11.056544-6.266813c-57.812019-99.175313 29.159935-207.297763-10.251617-274.943171-39.916084-68.23624-125.983533-76.293809-201.188616-33.32398-75.407559 42.976467-112.006016 119.66859-71.58706 188.996875z" fill="currentColor" p-id="5619"></path></svg>`;

const home = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3494" width="200" height="200"><path d="M67.452148 765.583218a30.137242 30.137242 0 0 1 52.322075-29.864197l1.262829 2.218483a30.103111 30.103111 0 1 1-52.151422 30.103111l-1.433482-2.457397z m76.315825 101.777187a30.103111 30.103111 0 1 1 43.34575-41.809877 451.683194 451.683194 0 1 0-113.210908-204.441766 30.103111 30.103111 0 0 1-58.499697 14.437206 511.923548 511.923548 0 1 1 128.330724 231.882698v-0.068261z m368.575398-190.00456l-177.819967 93.449342a6.00697 6.00697 0 0 1-8.771542-6.314145l33.95986-198.02523-143.928369-140.310534a6.00697 6.00697 0 0 1 3.378921-10.239154l198.878492-28.908543 88.875853-180.140842a6.00697 6.00697 0 0 1 10.853503 0l88.875853 180.140842 198.878493 28.908543a6.00697 6.00697 0 0 1 3.310659 10.239154l-143.894238 140.310534 33.95986 198.02523a6.00697 6.00697 0 0 1-8.703281 6.314145l-177.854097-93.449342z" fill="currentColor" p-id="3495"></path></svg>`;

const diary = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16577" width="200" height="200"><path d="M654.509419 281.822968m-130.452645 0a130.452645 130.452645 0 1 0 260.905291 0 130.452645 130.452645 0 1 0-260.905291 0Z" fill="currentColor" p-id="16578"></path><path d="M199.035871 5.67329h650.041806c47.888516 0 86.709677 38.821161 86.709678 86.709678v842.32258c0 47.888516-38.821161 86.709677-86.709678 86.709678H199.035871c-47.888516 0-86.709677-38.821161-86.709677-86.709678v-842.32258c0-47.888516 38.821161-86.709677 86.709677-86.709678z m0 57.806452a28.903226 28.903226 0 0 0-28.903226 28.903226v842.32258a28.903226 28.903226 0 0 0 28.903226 28.903226h650.041806a28.903226 28.903226 0 0 0 28.903226-28.903226v-842.32258a28.903226 28.903226 0 0 0-28.903226-28.903226H199.035871z" fill="currentColor" p-id="16579"></path><path d="M115.794581 774.168774h88.006193a28.903226 28.903226 0 1 0 0-57.806451H115.794581a28.903226 28.903226 0 0 0 0 57.806451zM115.794581 310.726194h88.006193a28.903226 28.903226 0 1 0 0-57.806452H115.794581a28.903226 28.903226 0 0 0 0 57.806452zM115.794581 542.447484h88.006193a28.903226 28.903226 0 1 0 0-57.806452H115.794581a28.903226 28.903226 0 1 0 0 57.806452z" fill="currentColor" p-id="16580"></path><path d="M524.056774 704.710194h260.913549a28.903226 28.903226 0 0 0 0-57.806452H524.056774a28.903226 28.903226 0 0 0 0 57.806452zM342.610581 843.627355h443.912258a28.903226 28.903226 0 0 0 0-57.806452H342.610581a28.903226 28.903226 0 1 0 0 57.806452z" fill="currentColor" p-id="16581"></path></svg>`;

const time = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12516" width="200" height="200"><path d="M549.9 510c5.8 0 11.2-1.1 16.3-3.1l111.4 89.6L590.2 484c2.5-5.6 3.9-11.7 3.9-18.2 0-2.2-0.2-4.4-0.5-6.5l124-160.9-166.2 123.1H550c-24.4 0-44.3 19.9-44.3 44.3 0 24.3 19.8 44.2 44.2 44.2z m67.5 25.2l-41.7-33.5c3.4-2.4 6.4-5.3 9-8.6l32.7 42.1z m-3.1-135.4l-29.7 38.5c-2.8-3.5-6.1-6.7-9.9-9.2l39.6-29.3z m-64.4 41.7c13.4 0 24.3 10.9 24.3 24.3S563.3 490 549.9 490s-24.3-10.9-24.3-24.3 10.9-24.2 24.3-24.2z" fill="currentColor" p-id="12517"></path><path d="M711.4 699.5c-20.8 4.9-42.3 7.3-63.9 7.3-154.1 0-279.5-125.3-279.5-279.4 0-74.8 29.1-145 82.1-197.8l54.7-54.6-75.2 17.6c-69.9 16.3-133.2 56.3-178.4 112.6-22.6 28.1-40.2 59.5-52.3 93.3-12.5 35-18.9 71.7-18.9 109.1 0 86.4 33.6 167.6 94.7 228.7C335.8 797.4 417 831 503.4 831c86.3 0 167.4-33.6 228.5-94.5l54.7-54.6-75.2 17.6zM503.5 787C349.4 787 224 661.6 224 507.5c0-104.8 57.2-197.6 145.4-245.5-7.5 12.6-14.1 25.7-19.9 39.3-16.9 39.9-25.5 82.4-25.5 126.1 0 86.4 33.6 167.6 94.7 228.7 59.6 59.6 138.4 93.1 222.5 94.7-41.5 23.6-88.6 36.2-137.7 36.2z" fill="currentColor" p-id="12518"></path></svg>`;

const album = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17323" width="200" height="200"><path d="M665.269236 349.789965m-64.000471 0a64.00047 64.00047 0 1 0 128.000941 0 64.00047 64.00047 0 1 0-128.000941 0Z" fill="currentColor" p-id="17324"></path><path d="M918.478999 312.107656a378.681993 378.681993 0 0 0-349.202943-231.444787H455.551796a378.681993 378.681993 0 0 0-378.960452 378.967978v113.76189a378.674467 378.674467 0 0 0 378.960452 378.960452h113.76189A378.681993 378.681993 0 0 0 948.266612 573.392737V459.630847a376.627415 376.627415 0 0 0-29.787613-147.523191z m-349.202943 564.986278H455.551796c-164.441472 0-298.779242-131.365029-303.565731-294.66256l0.857956 0.699911c0.263407-0.316089 26.574043-32.218487 64.956263-63.6317 47.300442-38.705835 91.545358-59.560174 127.940733-60.305241 4.304829-0.097837 28.967287 1.723437 89.889654 46.239286 40.910931 29.892976 88.64035 71.985477 138.033 121.731845C619.007372 672.817739 662.281443 721.487899 695.433145 764.19c22.449836 28.892028 35.37185 48.67016 42.694575 61.554545a301.962708 301.962708 0 0 1-168.814034 51.356915zM873.007357 573.392737a302.481997 302.481997 0 0 1-77.231047 202.138833c-9.151525-14.59277-21.463939-32.256117-38.043554-53.795315-34.664413-45.020086-80.113477-96.474839-127.940733-144.874066-52.53096-53.133034-103.857772-98.506839-148.403725-131.214511-57.513123-42.227968-102.352587-62.397448-137.167518-61.712589-54.547908 1.113837-113.513534 27.44705-175.263753 78.269625-6.02074 4.929481-11.695288 9.843911-17.098902 14.668029v-17.241896c0-167.459368 136.219251-303.701197 303.701197-303.701197h113.754364c167.459368 0 303.701197 136.219251 303.701197 303.701197z" fill="currentColor" p-id="17325"></path></svg>`;

const arrowDown = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Mask group">
<mask id="mask0_25_15756" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="6">
<rect id="Rectangle 34624808" y="6" width="6" height="10" transform="rotate(-90 0 6)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_25_15756)">
<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 5.59615C4.84171 5.79142 5.15829 5.79142 5.35355 5.59615L8.88909 2.06062C9.08435 1.86536 9.08435 1.54878 8.88909 1.35351C8.69383 1.15825 8.37724 1.15825 8.18198 1.35351L5 4.53549L1.81802 1.35351C1.62276 1.15825 1.30617 1.15825 1.11091 1.35351C0.915651 1.54878 0.91565 1.86536 1.11091 2.06062L4.64645 5.59615Z" fill="#27264D"/>
</g>
</g>
</svg>
`;

const circleRight = `<svg t="1717767569338" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4242" width="200" height="200"><path d="M514 114.3c-227.2 0-410.5 190.7-398.3 420.5C126.4 737 290.1 900.7 492.3 911.4c7.3 0.4 14.5 0.6 21.7 0.6 220 0 398.8-178.9 398.8-398.8 0-220-178.8-398.9-398.8-398.9z m0 755c-6.4 0-13-0.2-19.4-0.5-87.3-4.6-169.7-41.6-232.2-104s-99.4-144.9-104-232.2c-5.2-98.8 29.3-192.6 97.2-264.3C323.6 196.6 415.4 157 514 157c196.4 0 356.1 159.8 356.1 356.1S710.4 869.3 514 869.3z" p-id="4243"></path><path d="M554.2 333.6L524 363.8l117.7 117.7c3 3 5.4 6.3 7.4 9.8H325V534h324.1c-1.9 3.5-4.4 6.9-7.4 9.9L524 662l30.3 30.2L672 574c33.7-33.9 33.7-88.9-0.1-122.7L554.2 333.6z" p-id="4244"></path></svg>`;

const github = `<svg t="1721290988055" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7956" width="200" height="200"><path d="M886.7 298.5c-10.3-18.3-22.5-30.4-32.5-38v-68.9c1.5-13 4.3-56.2-21.1-81.6-9.5-9.5-26.6-20.1-53.5-16.4-34.2 4.7-72.5 22.3-103.2 36.5-11.3 5.2-26.5 12.2-32.3 13.8-5.3-0.3-16.5-2.1-26.4-3.6-23.4-3.6-55.3-8.6-85.7-8.6-30.4 0-62.3 5-85.7 8.6-10 1.5-21.1 3.3-26.4 3.6-5.8-1.6-21-8.6-32.3-13.8-30.7-14.2-69-31.8-103.2-36.5-27-3.7-44 6.9-53.5 16.4-25.4 25.4-22.6 68.6-21.1 81.6v68.9c-10 7.6-22.2 19.7-32.5 38-24.8 44.1-28.8 104.4-11.9 179.3 16.9 74.8 61.3 135.1 128.3 174.6 21.1 12.4 41.3 20.9 57.9 26.6-12.7 31.7-20.3 72.6-22.8 122.2-63.6-0.8-109.8-15.7-133.8-43.1-23.4-26.7-19.7-57.7-19.5-59v0.3c0.1-0.5 0.2-1 0.2-1.6 2.2-16.4-9.3-31.5-25.8-33.7-16.4-2.2-31.5 9.3-33.7 25.8 0 0.2 0 0.4-0.1 0.6-0.4 3-2.2 16.7 0.7 35.6 4 26.2 15 50.5 32 70.3 36 42 96.4 63.7 179.5 64.7 0.8 25.1 2.5 41.9 2.6 43 1.7 16.5 16.4 28.5 32.9 26.8 16.5-1.7 28.5-16.4 26.8-32.9 0-0.4-4.2-41.5-2-90.2 2.6-60 13.8-106.2 31.3-130.3 6.2-8.5 7.6-19.5 3.6-29.2-4-9.7-12.7-16.5-23-18.1-1.6-0.3-38.3-6.9-78.1-30.7-52.2-31.3-85.3-76.7-98.5-135.1-16.1-71.1-7-111.3 3.5-132.5 9.4-19 21.2-25.8 23.5-27 12.2-4.1 18.8-14.9 18.8-27.9v-87.4c0-1.4-0.1-2.7-0.3-4.1-1.7-13.4 0.4-28.6 3.4-32.8 0.6-0.1 1.6-0.1 3.3 0.2 25.4 3.5 60.6 19.7 86.3 31.6 28.4 13.1 42.7 19.4 55.9 19.4 9 0 20.8-1.8 37.1-4.4 22.6-3.5 50.8-7.9 76.5-7.9 25.7 0 53.9 4.4 76.5 7.9 16.3 2.5 28.1 4.4 37.1 4.4 13.2 0 27.5-6.3 55.9-19.4 25.7-11.8 60.9-28.1 86.3-31.6 1.6-0.2 2.7-0.2 3.2-0.2 1 1.6 3.1 6.4 3.8 15.7 0.7 8.8-0.2 16.4-0.3 17.1-0.2 1.4-0.3 2.6-0.3 4.1V277c0 12.9 6.6 23.8 18.8 27.9 2.4 1.2 14.2 8 23.5 27 10.5 21.2 19.6 61.4 3.5 132.5-13.2 58.3-46.3 103.8-98.5 135.1-39.7 23.8-76.5 30.4-78.1 30.7-10.3 1.6-19 8.5-23 18.1-4 9.7-2.6 20.7 3.6 29.2 37.3 51 33.8 176.4 29.3 220.4-1.7 16.5 10.3 31.2 26.8 32.9 1 0.1 2.1 0.2 3.1 0.2 15.2 0 28.2-11.5 29.8-26.9 0.2-1.8 4.6-45.2 2.3-98.1-2.2-51.9-9.9-94.4-23-127.2 16.5-5.7 36.8-14.2 57.9-26.6 67.1-39.5 111.4-99.8 128.3-174.6 17.1-74.7 13.1-135.1-11.7-179.1z" p-id="7957" fill="#ffffff"></path></svg>`;

const email = `<svg t="1721290796497" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6030" width="200" height="200"><path d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z" fill="#ffffff" p-id="6031"></path></svg>`;

const send = `<svg t="1724051526090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3661" width="200" height="200"><path d="M244.352 418.432l323.498667 43.733333 40.576 315.136 239.317333-600.746666-603.392 241.92z m-130.816 47.786667a29.312 29.312 0 0 1-18.773333-8.661334 32.554667 32.554667 0 0 1-9.088-19.285333 31.146667 31.146667 0 0 1 19.754666-34.090667l788.906667-316.16a28.629333 28.629333 0 0 1 18.304-2.005333c6.101333 1.322667 11.52 4.394667 16.213333 9.130667 4.693333 4.736 7.765333 10.154667 9.130667 16.256a28.586667 28.586667 0 0 1-2.048 18.346666l-314.368 788.778667a30.976 30.976 0 0 1-13.696 15.786667 32 32 0 0 1-20.778667 4.053333 31.616 31.616 0 0 1-18.773333-9.173333 29.781333 29.781333 0 0 1-8.618667-18.773334l-49.706666-390.357333-396.458667-53.845333z" fill="currentColor"  p-id="3662"></path></svg>`;

const weChat = `<svg t="1724141365249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2615" width="200" height="200"><path d="M579.867 511.932c-11.67 0-23.344 10.837-23.344 24.178 0 10.839 11.668 21.678 23.344 21.678 17.514 0 30.020-10.839 30.020-21.678 0-13.34-12.505-24.178-30.020-24.178v0zM503.154 399.36c18.345 0 30.020-11.67 30.020-29.185 0-18.345-11.675-29.183-30.020-29.183-17.51 0-34.188 10.839-34.188 29.183-0.001 17.517 16.678 29.185 34.188 29.185v0zM512.326 0.56c-282.655 0-511.788 229.133-511.788 511.788 0 282.653 229.133 511.786 511.788 511.786 282.653 0 511.786-229.133 511.786-511.786 0.001-282.655-229.132-511.788-511.786-511.788v0zM415.602 642.009c-30.855 0-53.369-4.999-82.553-13.341l-84.218 42.53 24.186-71.715c-59.204-41.689-94.228-94.221-94.228-158.428 0-113.403 106.733-200.123 236.814-200.123 115.069 0 217.633 68.377 237.644 165.106-8.338-1.671-15.844-2.502-22.514-2.502-113.403 0-200.954 85.049-200.954 187.613 0 17.508 2.502 33.351 6.671 50.030-6.671 0.829-14.178 0.829-20.849 0.829v0zM763.314 723.724l16.674 60.041-63.371-35.854c-24.18 4.999-47.529 12.505-71.709 12.505-111.737 0-200.123-76.711-200.123-171.769 0-95.058 88.388-171.771 200.123-171.771 105.895 0 200.954 76.713 200.954 171.771 0 53.362-35.854 100.891-82.548 135.078v0zM338.053 340.992c-17.51 0-35.854 10.839-35.854 29.183 0 17.516 18.343 29.19 35.854 29.19 16.679 0 30.020-11.675 30.020-29.19 0-18.343-13.341-29.183-30.020-29.183v0zM710.783 511.932c-12.51 0-23.349 10.837-23.349 24.178 0 10.839 10.839 21.678 23.349 21.678 16.674 0 29.183-10.839 29.183-21.678 0-13.34-12.509-24.178-29.183-24.178v0zM710.783 511.932z" p-id="2616" fill="#aad08f"></path></svg>`;

const icon: { [key: string]: any } = {
  user,
  article,
  home,
  diary,
  time,
  album,
  arrowDown,
  circleRight,
  github,
  email,
  send,
  weChat,
};

export default icon;
