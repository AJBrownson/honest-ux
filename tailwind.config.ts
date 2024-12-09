import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			bg: '#0D0D0D',
  			semiBg: '#171717',
  			semiBg2: '#131313',
  			stroke: '#292929',
  			strokeHover: '#474853',
  			titleText: '#E3E3E3',
  			bodyText: '#A8A8A8',
  			softBodyText: '#8A8A8A',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			neuePower: [`var(--font-neue-power)`],
  			poppins: [`var(--font-poppins)`]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	animation: {
  		'infinite-scroll': 'infinite-scroll 10s linear infinite',
  		'bounce': 'bounce 1s infinte'
  	},
  	keyframes: {
  		'infinite-scroll': {
  			from: {
  				transform: 'translateX(0)'
  			},
  			to: {
  				transform: 'translateX(-100%)'
  			}
  		},
  		'bounce': {
  			'0%, 100%': {
  				transform: 'translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1);'
  			},
  			'50%': {
  				transform: 'translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1);'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
