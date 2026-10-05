import Reveal from "./Reveal";

const CARDS = [
  {
    name: "Visa",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" className="h-7 w-11">
        <rect width="48" height="32" rx="4" fill="#1A1F71" />
        <path
          d="M19.5 21h-3l1.9-11.5h3L19.5 21Zm12.7-11.2c-.6-.2-1.5-.5-2.7-.5-3 0-5 1.5-5 3.7 0 1.6 1.5 2.5 2.6 3 1.2.6 1.6 1 1.6 1.5 0 .8-1 1.2-1.8 1.2-1.2 0-1.9-.2-2.9-.6l-.4-.2-.4 2.5c.7.3 2 .6 3.4.6 3.2 0 5.2-1.5 5.2-3.8 0-1.3-.8-2.3-2.5-3.1-1-.5-1.7-.9-1.7-1.4 0-.5.5-1 1.7-1 1 0 1.7.2 2.2.4l.3.1.4-2.4ZM37 9.5h-2.3c-.7 0-1.3.2-1.6 1L29 21h3.2l.6-1.7h3.9l.4 1.7H40L37 9.5Zm-3.6 8.4 1.2-3.2.4-1.1.2 1 .7 3.3h-2.5ZM16.3 9.5l-2.8 7.8-.3-1.5-.5-2.4c-.4-1.1-1.3-2.7-2.7-3.6l2.7 10.2h3.2l4.8-10.5h-3.2l-1.2-.0Z"
          fill="#fff"
        />
        <path
          d="M12.2 9.5H7.3l-.1.3c3.8.9 6.3 3.2 7.3 5.9l-1-5.1c-.2-.7-.7-1-1.3-1.1Z"
          fill="#F9A825"
        />
      </svg>
    ),
  },
  {
    name: "Mastercard",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" className="h-7 w-11">
        <rect width="48" height="32" rx="4" fill="#252525" />
        <circle cx="19" cy="16" r="8" fill="#EB001B" />
        <circle cx="29" cy="16" r="8" fill="#F79E1B" />
        <path
          d="M24 9.8a8 8 0 0 1 3 6.2 8 8 0 0 1-3 6.2 8 8 0 0 1-3-6.2 8 8 0 0 1 3-6.2Z"
          fill="#FF5F00"
        />
      </svg>
    ),
  },
  {
    name: "Amex",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" className="h-7 w-11">
        <rect width="48" height="32" rx="4" fill="#006FCF" />
        <text
          x="24"
          y="18"
          textAnchor="middle"
          fill="#fff"
          fontSize="7"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          AMEX
        </text>
      </svg>
    ),
  },
  {
    name: "Discover",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" className="h-7 w-11">
        <rect width="48" height="32" rx="4" fill="#fff" stroke="#E5E7EB" />
        <circle cx="28" cy="16" r="7" fill="#F47216" />
        <text
          x="16"
          y="18"
          textAnchor="middle"
          fill="#0B1017"
          fontSize="5.5"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          D
        </text>
      </svg>
    ),
  },
];

export default function AcceptedPayments() {
  return (
    <section className="border-b border-line bg-paper py-14 md:py-20">
      <div className="container px-5 sm:px-6 md:px-0">
        <Reveal>
          <span
            className="eyebrow"
            style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}
          >
            PAYMENT OPTIONS
          </span>

          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            We accept{" "}
            <span style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}>
              all major cards
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted font-sans normal-case">
            Pay for your flooring project the way that works best for you —
            credit cards accepted on every service, no surcharge.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {CARDS.map((card) => (
            <div
              key={card.name}
              className="group -mx-0 rounded-card border-t border-ink/15 bg-paper px-4 pb-6 pt-6 transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-t-[oklab(0.5_0.118727_0.0741887_/_0.8)] hover:shadow-card"
            >
              {card.icon}
              <h3
                className="mt-4 text-lg"
                style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}
              >
                {card.name}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted font-sans normal-case">
                Accepted for all flooring services
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
