---
layout: home
---

<script setup>

	import { onMounted, computed } from 'vue';

	const isMobile = () => {
		return window.innerWidth < 768;
	};

	const isTablet = () => {
		return window.innerWidth < 1024 && window.innerWidth >= 768;
	};

	const isDesktop = () => {
		return window.innerWidth >= 1024;
	};


	




onMounted(() => {
      // Since this page does not have the sidebar we need to make sure the reference menu is not highlighted
      const api3_navbarReferenceBtn = document.getElementById(
          'api3_Reference_Menu'
      );
      api3_navbarReferenceBtn.style.color = '';
})
</script>

<div class='home-hero' >
  <div class='text-content' >
	 <h1 
	 :class="{'font-heading-3': isMobile, 'font-heading-3': isTablet, 'font-heading-2': isDesktop}"
	 > 
	 	<span :class="{'font-subtitle-12': isMobile, 'font-subtitle-9': isTablet, 'font-subtitle-12': isDesktop}">API3</span>
	 	Docs
	 </h1>
	 <p :class="{'font-body-6': isMobile, 'font-body-3': isTablet, 'font-body-6': isDesktop}" v-if="!isDark">
		API3 builds solutions that bridge the gap between off-chain data and
		on-chain applications with maximum security and minimal latency.
	 </p>
	<div  class="actions">
	<a   class="VPButton medium brand" href="/guides/dapis/">
		dAPI
	</a>
	<a   class="VPButton medium brand outline" href="/reference/oev-network/">
		OEV Network
	</a>
	</div>
  </div>

  <div class='code'>

```solidity
pragma solidity ^0.8.0;

import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";

contract DataFeedReaderExample {
  address public ETH_USD_PROXY =
    0xa47Fd122b11CdD7aad7c3e8B740FB91D83Ce43D1;
  function readDataFeed()
    public
    view
    returns (int224 value, uint32 timestamp)
  {
    (value, timestamp) =
      Iproxy(ETH_USD_PROXY).read();
  }
}
```

  </div>

</div>

<BgGraphic />

<Teleport to='body'>
 <picture class="bg-graphic">
    <svg
      width="768"
      height="978"
      viewBox="0 0 768 978"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <mask
          id="mask0_154_90184"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="-412"
          y="0"
          width="1392"
          height="978"
        >
          <rect
            x="-250.979"
            y="1.03444"
            width="1262.32"
            height="709.793"
            transform="rotate(13.02 -250.979 1.03444)"
            fill="url(#paint0_linear_154_90184)"
            stroke="url(#paint1_linear_154_90184)"
            stroke-width="0.6"
          />
        </mask>
        <g mask="url(#mask0_154_90184)">
          <path
            opacity="0.0294118"
            d="M551.447 214.246C438.147 333.793 262.457 478.942 -84.8706 296.032C-423.612 117.643 -124.745 -9.57804 -380.045 -163.168C-712.471 -363.157 -872.145 -17.1646 -1122.54 -84.7414C-1372.93 -152.318 -1399.66 -310.356 -1444.83 -461.121C-1480.96 -581.733 -1441.08 -695.721 -1416.62 -737.639"
            stroke="url(#paint2_linear_154_90184)"
            stroke-width="0.0560612"
          />
          <path
            opacity="0.0588235"
            d="M568.969 239.365C452.061 357.451 271.816 500.527 -72.3846 315.762C-408.077 135.565 -104.552 11.2986 -357.06 -143.563C-685.85 -345.208 -855.191 -2.1225 -1104.99 -71.3433C-1354.79 -140.564 -1377.56 -298.057 -1419.04 -448.457C-1452.23 -568.777 -1409.22 -681.907 -1383.56 -723.432"
            stroke="url(#paint3_linear_154_90184)"
            stroke-width="0.112122"
          />
          <path
            opacity="0.0882353"
            d="M586.779 263.663C466.684 380.433 282.42 521.645 -58.9513 335.261C-391.884 153.484 -84.2667 31.8621 -334.256 -124.106C-659.766 -327.192 -837.669 13.2594 -1086.9 -57.4115C-1336.14 -128.082 -1355.39 -285.067 -1393.59 -435.12C-1424.15 -555.162 -1378.37 -667.513 -1351.66 -708.683"
            stroke="url(#paint4_linear_154_90184)"
            stroke-width="0.168184"
          />
          <path
            opacity="0.117647"
            d="M605 287.074C482.183 402.7 294.488 542.296 -44.4147 354.542C-374.94 171.43 -63.8438 52.0924 -311.641 -104.808C-634.299 -309.108 -819.534 29.0427 -1068.25 -42.8654C-1316.97 -114.773 -1333.2 -271.304 -1368.58 -421.041C-1396.89 -540.831 -1348.73 -652.5 -1321.12 -693.361"
            stroke="url(#paint5_linear_154_90184)"
            stroke-width="0.224245"
          />
          <path
            opacity="0.147059"
            d="M623.733 309.528C498.693 424.208 308.202 562.469 -28.651 373.607C-357.177 189.414 -43.2538 71.9588 -289.236 -85.6933C-609.529 -290.972 -800.759 45.2661 -1049.04 -27.6502C-1297.32 -100.567 -1311.07 -256.713 -1344.13 -406.18C-1370.58 -525.753 -1320.49 -636.855 -1292.13 -677.459"
            stroke="url(#paint6_linear_154_90184)"
            stroke-width="0.280306"
          />
          <path
            opacity="0.176471"
            d="M643.098 330.984C516.366 444.936 323.747 582.169 -11.5231 392.47C-338.506 207.461 -22.4376 91.4485 -267.021 -66.7705C-585.492 -272.787 -781.293 61.9733 -1029.22 -11.71C-1277.15 -85.3933 -1289.01 -241.238 -1320.3 -390.492C-1345.34 -509.894 -1293.76 -620.557 -1264.84 -660.963"
            stroke="url(#paint7_linear_154_90184)"
            stroke-width="0.336367"
          />
          <path
            opacity="0.205882"
            d="M663.15 351.409C535.278 464.866 341.226 601.402 7.03237 411.141C-318.9 225.584 -1.38996 110.55 -245.022 -48.0484C-562.256 -254.559 -761.141 79.1956 -1008.83 4.99583C-1256.52 -69.204 -1267.09 -224.842 -1297.19 -373.947C-1321.27 -493.232 -1268.69 -603.595 -1239.39 -643.867"
            stroke="url(#paint8_linear_154_90184)"
            stroke-width="0.392428"
          />
          <path
            opacity="0.235294"
            d="M683.953 370.764C555.508 483.971 360.735 620.155 27.0861 429.613C-298.315 243.781 19.9198 129.24 -223.231 -29.5481C-539.838 -236.306 -740.277 96.9393 -987.842 22.4798C-1235.41 -51.9797 -1245.34 -207.512 -1274.83 -356.542C-1298.42 -475.766 -1245.34 -585.978 -1215.85 -626.181"
            stroke="url(#paint9_linear_154_90184)"
            stroke-width="0.448489"
          />
          <path
            opacity="0.264706"
            d="M705.532 389.05C577.087 502.257 382.314 638.44 48.6654 447.898C-276.735 262.067 41.499 147.526 -201.652 -11.262C-518.259 -218.02 -718.697 115.225 -966.262 40.7657C-1213.83 -33.6938 -1223.76 -189.226 -1253.25 -338.256C-1276.85 -457.48 -1223.76 -567.692 -1194.27 -607.895"
            stroke="url(#paint10_linear_154_90184)"
            stroke-width="0.504551"
          />
          <path
            opacity="0.294118"
            d="M727.885 406.265C600.013 519.722 405.961 656.258 71.7672 465.997C-254.165 280.44 63.3448 165.406 -180.287 6.80768C-497.521 -199.703 -696.406 134.052 -944.095 59.8519C-1191.78 -14.3479 -1202.36 -169.986 -1232.46 -319.091C-1256.53 -438.376 -1203.95 -548.739 -1174.66 -589.011"
            stroke="url(#paint11_linear_154_90184)"
            stroke-width="0.560612"
          />
          <path
            opacity="0.323529"
            d="M750.985 422.416C624.253 536.368 431.634 673.601 96.3633 483.902C-230.619 298.893 85.449 182.88 -159.134 24.6613C-477.605 -181.356 -673.407 153.405 -921.337 79.7218C-1169.27 6.03849 -1181.12 -149.807 -1212.42 -299.06C-1237.45 -418.463 -1185.87 -529.125 -1156.95 -569.531"
            stroke="url(#paint12_linear_154_90184)"
            stroke-width="0.616673"
          />
          <path
            opacity="0.352941"
            d="M774.78 437.533C649.74 552.213 459.249 690.473 122.396 501.612C-206.13 317.419 107.793 199.963 -138.189 42.3111C-458.482 -162.967 -649.712 173.271 -897.99 100.354C-1146.27 27.4379 -1160.02 -128.708 -1193.09 -278.175C-1219.54 -397.749 -1169.44 -508.851 -1141.08 -549.455"
            stroke="url(#paint13_linear_154_90184)"
            stroke-width="0.672734"
          />
          <path
            opacity="0.382353"
            d="M799.191 451.646C676.374 567.272 488.679 706.869 149.776 519.115C-180.749 336.002 130.347 216.665 -117.451 59.7642C-440.108 -144.536 -625.343 193.615 -874.062 121.707C-1122.78 49.7986 -1139.01 -106.732 -1174.39 -256.469C-1202.7 -376.259 -1154.54 -487.928 -1126.92 -528.789"
            stroke="url(#paint14_linear_154_90184)"
            stroke-width="0.728796"
          />
          <path
            opacity="0.411765"
            d="M824.13 464.814C704.035 581.583 519.771 722.796 178.4 536.411C-154.533 354.634 153.084 233.012 -96.9047 77.0441C-422.415 -126.042 -600.318 214.409 -849.552 143.739C-1098.78 73.0676 -1118.04 -83.9171 -1156.24 -233.97C-1186.8 -354.012 -1141.02 -466.363 -1114.31 -507.533"
            stroke="url(#paint15_linear_154_90184)"
            stroke-width="0.784857"
          />
          <path
            opacity="0.441176"
            d="M849.48 477.081C732.572 595.166 552.327 738.242 208.126 553.477C-127.566 373.28 175.959 249.014 -76.5493 94.1519C-405.34 -107.493 -574.68 235.593 -824.479 166.372C-1074.28 97.151 -1097.05 -60.3417 -1138.53 -210.742C-1171.72 -331.062 -1128.71 -444.192 -1103.05 -485.718"
            stroke="url(#paint16_linear_154_90184)"
            stroke-width="0.840918"
          />
          <path
            opacity="0.470588"
            d="M875.113 488.539C761.812 608.085 586.122 753.234 238.795 570.324C-99.946 391.935 198.921 264.714 -56.3792 111.124C-388.805 -88.8652 -548.479 257.127 -798.872 189.551C-1049.27 121.974 -1076 -36.0637 -1121.16 -186.829C-1157.29 -307.441 -1117.41 -421.429 -1092.95 -463.347"
            stroke="url(#paint17_linear_154_90184)"
            stroke-width="0.896979"
          />
          <path
            opacity="0.5"
            d="M900.912 499.268C791.587 620.39 620.925 767.782 270.244 586.942C-71.7682 410.572 221.932 280.139 -36.3743 127.974C-372.715 -70.1591 -521.764 278.947 -772.755 213.186C-1023.75 147.424 -1054.81 -11.1773 -1104 -162.312C-1143.36 -283.219 -1106.91 -398.124 -1083.76 -440.462"
            stroke="url(#paint18_linear_154_90184)"
            stroke-width="0.95304"
          />
          <path
            opacity="0.529412"
            d="M926.754 509.368C821.717 632.15 656.483 781.909 302.293 603.331C-43.1413 429.167 244.952 295.323 -16.5144 144.723C-356.97 -51.3732 -494.595 300.985 -746.168 237.185C-997.741 173.386 -1033.44 14.2175 -1086.94 -137.276C-1129.74 -258.471 -1096.97 -374.329 -1075.24 -417.109"
            stroke="url(#paint19_linear_154_90184)"
            stroke-width="1.0091"
          />
          <path
            opacity="0.558824"
            d="M952.516 518.967C852.014 643.461 692.531 795.666 334.748 619.514C-14.191 447.716 267.931 310.324 3.21393 161.408C-341.474 -32.4946 -467.056 323.188 -719.173 261.467C-971.289 199.746 -1011.85 40.0251 -1069.86 -111.805C-1116.26 -233.269 -1087.39 -350.099 -1067.15 -393.332"
            stroke="url(#paint20_linear_154_90184)"
            stroke-width="1.06516"
          />
          <path
            opacity="0.588235"
            d="M978.099 528.18C882.31 654.406 728.813 809.096 367.421 635.499C14.9636 466.195 290.837 325.176 22.8387 178.044C-326.122 -13.5373 -439.228 345.475 -691.833 285.919C-944.438 226.363 -990.006 66.1177 -1052.66 -86.0162C-1102.78 -207.723 -1077.92 -325.524 -1059.23 -369.21"
            stroke="url(#paint21_linear_154_90184)"
            stroke-width="1.12122"
          />
          <path
            opacity="0.617647"
            d="M1003.42 537.157C912.449 665.104 765.08 822.271 400.132 651.325C44.2055 484.604 313.647 339.945 42.3957 194.668C-310.8 5.50363 -411.197 367.791 -664.222 310.453C-917.247 253.114 -967.89 92.3844 -1035.24 -60.0123C-1089.12 -181.93 -1068.36 -300.68 -1051.24 -344.815"
            stroke="url(#paint22_linear_154_90184)"
            stroke-width="1.17728"
          />
          <path
            opacity="0.647059"
            d="M1028.41 546.043C942.284 675.672 801.088 835.269 432.693 667.024C73.4057 502.938 336.333 354.681 61.9115 211.304C-295.413 24.6136 -383.071 390.067 -636.439 334.963C-889.807 279.86 -945.51 118.694 -1017.54 -33.9196C-1075.16 -156.01 -1058.5 -275.675 -1042.96 -320.245"
            stroke="url(#paint23_linear_154_90184)"
            stroke-width="1.23335"
          />
          <path
            opacity="0.676471"
            d="M1053.02 554.986C971.685 686.234 836.605 848.174 464.928 682.637C102.439 521.193 358.878 369.439 81.4167 227.975C-279.865 43.7747 -354.958 412.235 -608.589 359.347C-862.221 306.46 -922.887 144.913 -999.495 -7.86868C-1060.78 -130.094 -1048.16 -250.622 -1034.19 -295.608"
            stroke="url(#paint24_linear_154_90184)"
            stroke-width="1.28941"
          />
          <path
            opacity="0.705882"
            d="M1077.21 564.143C1000.54 696.92 871.419 861.084 496.667 698.216C131.18 539.375 381.265 384.278 100.939 244.706C-264.074 62.9681 -326.98 434.237 -580.795 383.51C-834.61 332.783 -900.064 170.911 -981.087 18.0102C-1045.91 -104.311 -1037.2 -225.642 -1024.75 -271.017"
            stroke="url(#paint25_linear_154_90184)"
            stroke-width="1.34547"
          />
          <path
            opacity="0.735294"
            d="M1100.99 573.678C1028.77 707.876 905.358 874.114 527.778 713.827C159.532 557.503 403.506 399.265 120.526 261.528C-247.942 82.1794 -299.239 456.025 -553.163 407.366C-807.087 358.708 -877.081 196.57 -962.284 43.5935C-1030.45 -78.7876 -1025.47 -200.852 -1014.46 -246.586"
            stroke="url(#paint26_linear_154_90184)"
            stroke-width="1.40153"
          />
          <path
            opacity="0.764706"
            d="M1124.38 583.735C1056.35 719.229 938.28 887.365 558.145 729.522C187.407 575.582 425.626 414.449 140.233 278.455C-231.377 101.377 -271.829 477.543 -525.798 430.825C-779.767 384.108 -853.981 221.757 -943.065 68.7454C-1014.33 -53.664 -1012.84 -176.384 -1003.18 -222.443"
            stroke="url(#paint27_linear_154_90184)"
            stroke-width="1.45759"
          />
          <path
            opacity="0.794118"
            d="M1147.4 594.458C1083.18 731.11 970.023 900.945 587.628 745.363C214.687 593.627 447.608 429.883 160.067 295.505C-214.34 120.533 -244.886 498.745 -498.849 453.808C-752.811 408.87 -830.862 246.357 -923.471 93.3416C-997.558 -29.0706 -999.237 -152.367 -990.816 -198.713"
            stroke="url(#paint28_linear_154_90184)"
            stroke-width="1.51365"
          />
          <path
            opacity="0.823529"
            d="M1170.08 605.991C1109.27 743.65 1000.49 914.97 616.144 761.42C241.301 611.666 469.48 445.626 180.074 312.705C-196.76 139.63 -218.502 519.603 -472.42 476.254C-726.337 432.905 -807.786 270.271 -903.512 117.276C-980.093 -5.12004 -984.593 -128.909 -977.271 -175.504"
            stroke="url(#paint29_linear_154_90184)"
            stroke-width="1.56971"
          />
          <path
            opacity="0.852941"
            d="M1192.49 618.445C1134.61 756.953 1029.6 929.529 643.621 777.741C267.189 629.705 491.27 461.713 200.296 330.058C-178.581 158.631 -192.76 540.073 -446.611 498.093C-700.461 456.112 -784.817 293.394 -883.21 140.433C-961.923 18.0652 -968.846 -106.133 -962.467 -152.936"
            stroke="url(#paint30_linear_154_90184)"
            stroke-width="1.62577"
          />
          <path
            opacity="0.882353"
            d="M1214.65 631.934C1159.18 771.127 1057.26 944.718 669.984 794.387C292.278 647.771 512.983 478.193 220.746 347.586C-159.774 177.523 -167.754 560.138 -421.529 519.284C-675.305 478.429 -762.037 315.653 -862.607 162.734C-943.063 40.3977 -951.969 -84.1257 -946.365 -131.095"
            stroke="url(#paint31_linear_154_90184)"
            stroke-width="1.68184"
          />
          <path
            opacity="0.911765"
            d="M1236.62 646.544C1183 786.254 1083.45 960.613 695.19 811.401C316.528 665.878 534.642 495.095 241.455 365.295C-140.304 196.283 -143.545 579.777 -397.251 539.784C-650.958 499.791 -739.502 336.98 -841.731 184.098C-923.514 61.7929 -933.936 -62.9733 -928.925 -110.068"
            stroke="url(#paint32_linear_154_90184)"
            stroke-width="1.7379"
          />
          <path
            opacity="0.941176"
            d="M1258.44 662.344C1206.06 802.4 1108.12 977.273 719.207 828.821C339.91 684.04 556.269 512.447 262.446 383.195C-120.14 214.897 -120.181 598.976 -373.834 559.566C-627.488 520.156 -717.254 357.324 -820.601 204.472C-903.279 82.1905 -914.725 -42.7368 -910.114 -89.9152"
            stroke="url(#paint33_linear_154_90184)"
            stroke-width="1.79396"
          />
          <path
            opacity="0.970588"
            d="M1280.13 679.374C1228.38 819.603 1131.25 994.734 742.01 846.667C362.394 702.259 577.867 530.26 283.727 401.285C-99.2738 233.348 -97.7019 617.719 -351.327 578.603C-604.951 539.487 -695.333 376.647 -799.243 223.811C-882.371 101.541 -894.333 -23.4661 -889.923 -70.6862"
            stroke="url(#paint34_linear_154_90184)"
            stroke-width="1.85002"
          />
          <path
            d="M1301.71 697.659C1249.96 837.889 1152.83 1013.02 763.589 864.952C383.974 720.545 599.447 548.545 305.306 419.571C-77.6942 251.634 -76.1223 636.004 -329.747 596.888C-583.372 557.772 -673.753 394.932 -777.663 242.096C-860.792 119.827 -872.754 -5.18058 -868.344 -52.4007"
            stroke="url(#paint35_linear_154_90184)"
            stroke-width="1.90608"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_154_90184"
          x1="1035.68"
          y1="356.356"
          x2="-269.576"
          y2="29.4156"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D9D9D9" stop-opacity="0" />
          <stop offset="0.213527" stop-color="#D9D9D9" stop-opacity="0.67" />
          <stop offset="0.391881" stop-color="#D9D9D9" stop-opacity="0.28" />
          <stop offset="1" stop-color="#D9D9D9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_154_90184"
          x1="380.256"
          y1="0.674561"
          x2="380.256"
          y2="711.067"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_154_90184"
          x1="-699.05"
          y1="79.7569"
          x2="-519.858"
          y2="-408.572"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_154_90184"
          x1="-683.803"
          y1="95.6957"
          x2="-500.789"
          y2="-392.496"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_154_90184"
          x1="-667.824"
          y1="111.859"
          x2="-481.373"
          y2="-376.238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_154_90184"
          x1="-651.032"
          y1="128.303"
          x2="-461.598"
          y2="-359.735"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_154_90184"
          x1="-633.372"
          y1="145.059"
          x2="-441.469"
          y2="-342.944"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_154_90184"
          x1="-614.766"
          y1="162.169"
          x2="-420.962"
          y2="-325.816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_154_90184"
          x1="-595.198"
          y1="179.661"
          x2="-400.103"
          y2="-308.316"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_154_90184"
          x1="-574.63"
          y1="197.54"
          x2="-378.882"
          y2="-290.435"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_154_90184"
          x1="-553.051"
          y1="215.826"
          x2="-357.302"
          y2="-272.149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_154_90184"
          x1="-530.464"
          y1="234.517"
          x2="-335.368"
          y2="-253.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_154_90184"
          x1="-506.88"
          y1="253.601"
          x2="-313.076"
          y2="-234.385"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_154_90184"
          x1="-482.325"
          y1="273.064"
          x2="-290.422"
          y2="-214.94"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_154_90184"
          x1="-456.841"
          y1="292.875"
          x2="-267.407"
          y2="-195.163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_154_90184"
          x1="-430.473"
          y1="313.01"
          x2="-244.022"
          y2="-175.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_154_90184"
          x1="-403.293"
          y1="333.411"
          x2="-220.278"
          y2="-154.781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_154_90184"
          x1="-375.385"
          y1="354.049"
          x2="-196.192"
          y2="-134.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_154_90184"
          x1="-346.835"
          y1="374.866"
          x2="-171.775"
          y2="-113.654"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_154_90184"
          x1="-317.742"
          y1="395.806"
          x2="-147.053"
          y2="-92.9649"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_154_90184"
          x1="-288.229"
          y1="416.83"
          x2="-122.071"
          y2="-72.2608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_154_90184"
          x1="-258.414"
          y1="437.872"
          x2="-96.8731"
          y2="-51.608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_154_90184"
          x1="-228.418"
          y1="458.895"
          x2="-71.5092"
          y2="-31.0441"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_154_90184"
          x1="-198.382"
          y1="479.85"
          x2="-46.0489"
          y2="-10.6144"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_154_90184"
          x1="-168.445"
          y1="500.692"
          x2="-20.5659"
          y2="9.64531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_154_90184"
          x1="-138.752"
          y1="521.385"
          x2="4.85636"
          y2="29.7111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_154_90184"
          x1="-109.428"
          y1="541.906"
          x2="30.1542"
          y2="49.5766"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_154_90184"
          x1="-80.5832"
          y1="562.222"
          x2="55.2687"
          y2="69.2284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_154_90184"
          x1="-52.3684"
          y1="582.311"
          x2="80.1007"
          y2="88.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_154_90184"
          x1="-24.8824"
          y1="602.167"
          x2="104.596"
          y2="107.909"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint30_linear_154_90184"
          x1="1.78323"
          y1="621.767"
          x2="128.705"
          y2="126.954"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint31_linear_154_90184"
          x1="27.5315"
          y1="641.114"
          x2="152.363"
          y2="145.826"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint32_linear_154_90184"
          x1="52.2977"
          y1="660.199"
          x2="175.536"
          y2="164.538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint33_linear_154_90184"
          x1="76.0338"
          y1="679.023"
          x2="198.197"
          y2="183.102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint34_linear_154_90184"
          x1="98.6993"
          y1="697.576"
          x2="220.321"
          y2="201.523"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint35_linear_154_90184"
          x1="120.279"
          y1="715.861"
          x2="241.901"
          y2="219.809"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#878888" />
          <stop offset="1" stop-color="#878888" stop-opacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </picture>
  </Teleport>

<style scoped>
span.font-subtitle-12 {
	display: block;
}

.bg-graphic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>
