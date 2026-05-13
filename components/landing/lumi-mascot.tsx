type SvgProps = {
  className?: string;
  size?: number;
};

export function LumiMascot({ className, size = 200 }: SvgProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 240 240"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="120" cy="213" rx="56" ry="14" fill="rgba(35, 31, 45, 0.12)" />
      <path
        d="M59 108C48 88 52 67 72 57C88 49 100 57 108 71C112 55 126 46 144 49C168 52 183 71 181 95C179 116 164 132 147 140L83 140C74 134 64 123 59 108Z"
        fill="#FFDCE3"
      />
      <path
        d="M179 105C191 88 191 67 173 55C158 45 145 52 136 66C133 52 119 43 101 46C76 50 59 68 59 92C58 114 72 131 91 140L155 140C164 134 174 121 179 105Z"
        fill="#FFE9D3"
      />
      <path
        d="M120 29C128 29 134 35 134 43C134 51 128 57 120 57C112 57 106 51 106 43C106 35 112 29 120 29Z"
        fill="#FCE7AE"
      />
      <path
        d="M120 21L123 31L133 33L125 39L127 49L120 43L113 49L115 39L107 33L117 31L120 21Z"
        fill="#F7B84A"
      />
      <rect x="67" y="62" width="106" height="120" rx="40" fill="url(#lumi-body)" />
      <rect x="75" y="70" width="90" height="104" rx="34" fill="rgba(255,255,255,0.12)" />
      <ellipse cx="98" cy="111" rx="6" ry="7" fill="#312A3E" />
      <ellipse cx="142" cy="111" rx="6" ry="7" fill="#312A3E" />
      <path
        d="M101 134C107 143 114 147 120 147C126 147 133 143 139 134"
        stroke="#312A3E"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse cx="91" cy="126" rx="9" ry="5.5" fill="#FFB9C7" />
      <ellipse cx="149" cy="126" rx="9" ry="5.5" fill="#FFB9C7" />
      <path
        d="M96 167C96 150 108 139 120 139C132 139 144 150 144 167C144 184 132 196 120 196C108 196 96 184 96 167Z"
        fill="rgba(255,255,255,0.92)"
      />
      <path
        d="M120 157C124 149 136 149 139 159C141 167 135 172 120 183C105 172 99 167 101 159C104 149 116 149 120 157Z"
        fill="#DE5D72"
      />
      <path
        d="M74 155C61 155 51 146 50 133C49 121 57 112 69 111"
        stroke="#DE5D72"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M166 155C179 155 189 146 190 133C191 121 183 112 171 111"
        stroke="#DE5D72"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M110 184C103 198 93 205 79 209"
        stroke="#7AB8AD"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="76" cy="210" r="8" fill="#7AB8AD" />
      <path
        d="M166 83L171 93L181 96L173 102L175 113L166 107L157 113L159 102L151 96L161 93L166 83Z"
        fill="#F2A07F"
      />
      <path
        d="M58 83L61 89L67 92L61 96L63 103L58 99L53 103L55 96L49 92L55 89L58 83Z"
        fill="#7AB8AD"
      />
      <defs>
        <linearGradient id="lumi-body" x1="78" y1="62" x2="163" y2="182" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB89D" />
          <stop offset="0.5" stopColor="#DE5D72" />
          <stop offset="1" stopColor="#C84F67" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RibbonDoodle({ className, size = 180 }: SvgProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 240 140"
      width={size}
      height={Math.round(size * 0.58)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 105C40 78 70 55 109 58C144 61 160 90 191 94C206 96 220 90 230 80"
        stroke="#DE5D72"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M22 41C45 23 67 16 88 20C108 24 120 40 137 44C161 50 185 39 217 16"
        stroke="#F2A07F"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 14"
      />
      <path
        d="M90 92C96 80 111 77 119 88C124 95 122 105 110 117C98 105 96 95 90 92Z"
        fill="#DE5D72"
      />
    </svg>
  );
}

export function SparkleDoodle({ className, size = 90 }: SvgProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 9L66 37L94 43L72 59L78 87L60 71L42 87L48 59L26 43L54 37L60 9Z" fill="#F2A07F" />
      <path d="M22 74L25 86L37 89L27 97L30 109L22 102L14 109L17 97L7 89L19 86L22 74Z" fill="#7AB8AD" />
      <path d="M96 72L99 84L111 87L101 95L104 107L96 100L88 107L91 95L81 87L93 84L96 72Z" fill="#DE5D72" />
    </svg>
  );
}
