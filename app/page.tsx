const products = [
  {
    name: "The Classic Straight",
    price: "₹2,499",
    fit: "Straight Fit",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Everyday Blue",
    price: "₹2,699",
    fit: "Relaxed Fit",
    image:
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Wide Leg",
    price: "₹2,899",
    fit: "Wide Leg",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Dark Denim",
    price: "₹2,799",
    fit: "Straight Fit",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
  },
];

const fits = [
  {
    name: "STRAIGHT",
    description: "Classic. Clean. Always relevant.",
  },
  {
    name: "WIDE LEG",
    description: "Roomy silhouettes made modern.",
  },
  {
    name: "BAGGY",
    description: "Relaxed fits for everyday movement.",
  },
  {
    name: "FLARED",
    description: "A little retro. A lot of attitude.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="logo">
          COOKIE
        </a>

        <div className="navLinks">
          <a href="#shop">Shop</a>
          <a href="#fits">Fits</a>
          <a href="#about">About</a>
        </div>

        <div className="navActions">
          <button>Search</button>
          <button>Bag (0)</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1800&q=90"
            alt="Cookie denim collection"
          />
        </div>

        <div className="heroOverlay" />

        <div className="heroContent">
          <p className="eyebrow">DENIM, DONE DIFFERENTLY.</p>

          <h1>
            FIND YOUR
            <br />
            PERFECT FIT.
          </h1>

          <p className="heroText">
            Jeans made for real days, real movement and every version of you.
          </p>

          <a href="#shop" className="primaryButton">
            SHOP DENIM
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro" id="about">
        <p className="eyebrow">WELCOME TO COOKIE</p>

        <h2>
          GOOD JEANS.
          <br />
          NO COMPLICATIONS.
        </h2>

        <p className="introText">
          We believe finding a pair of jeans you actually love shouldn't be
          complicated. Cookie creates easy-to-wear denim with considered fits,
          everyday comfort and a little personality.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="productsSection" id="shop">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">THE DENIM EDIT</p>
            <h2>NEW ARRIVALS</h2>
          </div>

          <a href="#shop">VIEW ALL →</a>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productImage">
                <img src={product.image} alt={product.name} />

                <button className="quickAdd">
                  QUICK ADD
                </button>
              </div>

              <div className="productInfo">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.fit}</p>
                </div>

                <span>{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FITS */}
      <section className="fitsSection" id="fits">
        <div className="fitsIntro">
          <p className="eyebrow">FIND YOUR FIT</p>

          <h2>
            ONE DENIM.
            <br />
            YOUR WAY.
          </h2>
        </div>

        <div className="fitsGrid">
          {fits.map((fit) => (
            <div className="fitCard" key={fit.name}>
              <span>COOKIE DENIM</span>

              <h3>{fit.name}</h3>

              <p>{fit.description}</p>

              <a href="#shop">SHOP {fit.name} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="statement">
        <div className="statementContent">
          <p className="eyebrow">WHY COOKIE?</p>

          <h2>
            DENIM THAT
            <br />
            MOVES WITH YOU.
          </h2>

          <p>
            From your first coffee to your last plan of the day, Cookie is
            designed to keep up.
          </p>

          <a href="#about" className="outlineButton">
            OUR STORY
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <p className="eyebrow">STAY IN THE LOOP</p>

        <h2>GOOD THINGS ARE COMING.</h2>

        <p>
          Sign up for new drops, exclusive launches and everything Cookie.
        </p>

        <div className="emailBox">
          <input
            type="email"
            placeholder="Your email address"
          />

          <button>JOIN →</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footerTop">
          <div className="footerLogo">COOKIE</div>

          <div className="footerLinks">
            <div>
              <p>SHOP</p>
              <a href="#shop">New Arrivals</a>
              <a href="#shop">All Jeans</a>
              <a href="#fits">Fits</a>
            </div>

            <div>
              <p>ABOUT</p>
              <a href="#about">Our Story</a>
              <a href="#about">Contact</a>
            </div>

            <div>
              <p>FOLLOW</p>
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          © 2026 COOKIE DENIM. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}