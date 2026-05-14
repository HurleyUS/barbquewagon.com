import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { JsonLd } from "@/components/json-ld";
import { getMenuSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Our full menu of slow-smoked meats, handmade sides, and Southern desserts. All plates come with two sides and fresh-baked cornbread.",
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

interface MenuCategory {
  name: string;
  description?: string;
  note?: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Smoked Meat Plates",
    description: "All plates served with your choice of 2 sides and fresh-baked cornbread.",
    items: [
      {
        name: "Smoked Brisket Plate",
        description:
          "Slow-smoked 14 hours over hickory. Hand-sliced with a peppercorn bark that locks in every ounce of flavor.",
        price: "$14.99",
        tag: "Fan Favorite",
      },
      {
        name: "Pulled Pork Plate",
        description:
          "Hand-pulled Carolina-style pork shoulder. Tender, smoky, and dressed in our house vinegar sauce.",
        price: "$12.99",
        tag: "Classic",
      },
      {
        name: "Baby Back Rib Plate",
        description:
          "Full rack of fall-off-the-bone baby backs. Dry rubbed, slow smoked, finished with a honey-chipotle glaze.",
        price: "$16.99",
        tag: "Pitmaster Pick",
      },
      {
        name: "Smoked Half Chicken",
        description:
          "Brined overnight, rubbed with our house blend, smoked until the skin crackles and the meat stays juicy.",
        price: "$13.99",
      },
      {
        name: "Smoked Turkey Plate",
        description:
          "Hickory-smoked turkey breast, sliced thick. Lean, smoky, and surprisingly tender.",
        price: "$13.49",
      },
      {
        name: "Combo Plate",
        description: "Can not decide? Pick any two meats and we will pile them on the same plate.",
        price: "$17.99",
        tag: "Best Value",
      },
    ],
  },
  {
    name: "Sandwiches",
    description: "Served on a toasted brioche bun with house pickles. Add a side for $3.49.",
    items: [
      {
        name: "Brisket Sandwich",
        description:
          "Sliced smoked brisket piled high with pickled onions and our smoky BBQ sauce.",
        price: "$10.99",
      },
      {
        name: "Pulled Pork Sandwich",
        description: "Hand-pulled pork with tangy vinegar slaw on top. The Carolina way.",
        price: "$9.99",
        tag: "Most Popular",
      },
      {
        name: "Smoked Turkey Sandwich",
        description: "Thick-sliced smoked turkey with pepper jack, lettuce, and chipotle mayo.",
        price: "$10.49",
      },
      {
        name: "The Wagon Burger",
        description:
          "Half-pound smoked burger patty topped with pulled pork, cheddar, and BBQ sauce. Not for the faint of heart.",
        price: "$13.99",
        tag: "Go Big",
      },
    ],
  },
  {
    name: "Sides",
    description: "All sides made fresh daily from scratch. No exceptions.",
    items: [
      {
        name: "Cole Slaw",
        description: "Crisp, tangy, vinegar-based. The Carolina classic.",
        price: "$3.49",
      },
      {
        name: "Mac & Cheese",
        description: "Three-cheese blend, baked until golden and bubbly. Comfort in a bowl.",
        price: "$4.49",
        tag: "House Made",
      },
      {
        name: "Baked Beans",
        description: "Slow-cooked with smoked pork and brown sugar. Sweet, savory, and smoky.",
        price: "$3.49",
      },
      {
        name: "Hush Puppies",
        description:
          "Golden-fried cornmeal fritters. Crispy outside, soft inside. Served with honey butter.",
        price: "$3.99",
      },
      {
        name: "Collard Greens",
        description:
          "Slow-braised with smoked ham hock, garlic, and a touch of vinegar. Southern soul food.",
        price: "$3.99",
      },
      {
        name: "Potato Salad",
        description:
          "Creamy, tangy, with a hint of mustard. Grandma's recipe — do not ask, she will not tell.",
        price: "$3.49",
      },
      {
        name: "Cornbread",
        description: "Fresh-baked daily. Sweet, buttery, and still warm from the oven.",
        price: "$2.49",
      },
      {
        name: "Fried Okra",
        description: "Lightly breaded and fried until crispy. A Southern staple done right.",
        price: "$3.99",
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Sweet Tea",
        description: "Brewed fresh daily. Sweet enough to make you smile, not enough to regret it.",
        price: "$2.49",
      },
      {
        name: "Unsweet Tea",
        description: "For those who like to add their own. We respect that.",
        price: "$2.49",
      },
      {
        name: "Fresh-Squeezed Lemonade",
        description: "Tart, sweet, and ice cold. Made in-house every morning.",
        price: "$2.99",
      },
      {
        name: "Arnold Palmer",
        description: "Half sweet tea, half lemonade. The perfect match.",
        price: "$2.99",
      },
      {
        name: "Fountain Drinks",
        description: "Coca-Cola, Sprite, Dr Pepper, and more. Free refills.",
        price: "$2.49",
      },
    ],
  },
  {
    name: "Desserts",
    description: "Save room. You will want to.",
    items: [
      {
        name: "Banana Pudding",
        description:
          "Layers of vanilla wafers, fresh bananas, and homemade custard. Topped with real whipped cream.",
        price: "$4.99",
        tag: "Must Try",
      },
      {
        name: "Peach Cobbler",
        description:
          "Warm, buttery, loaded with sweet peaches. Best served with a scoop of vanilla ice cream.",
        price: "$5.99",
        tag: "Seasonal",
      },
      {
        name: "Smoked Pecan Pie",
        description:
          "Yes, we smoke the pecans. Yes, it makes a difference. Rich, caramelized, and unforgettable.",
        price: "$5.49",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <JsonLd data={getMenuSchema()} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="absolute inset-0 smoke-overlay" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
            Our Menu
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground-strong sm:text-5xl">
            Smoked Fresh Daily
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
            Everything on this menu is made from scratch, smoked over real wood, and served with
            pride. When it sells out, the kitchen closes. That is just how fresh we keep it.
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {menuCategories.map((category) => (
              <div key={category.name}>
                {/* Category header */}
                <div className="border-b border-border pb-4">
                  <h2 className="font-display text-2xl font-bold text-foreground-strong sm:text-3xl">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="mt-2 text-sm text-foreground-muted">{category.description}</p>
                  )}
                </div>

                {/* Items */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <article
                      key={item.name}
                      className="group flex gap-4 rounded-lg border border-transparent p-4 transition-colors hover:border-border hover:bg-card-bg"
                    >
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-lg font-semibold text-foreground-strong">
                              {item.name}
                            </h3>
                            {item.tag && (
                              <span className="inline-block rounded-sm bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span className="shrink-0 font-display text-lg font-bold text-accent">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Catering CTA */}
          <div className="mt-20 rounded-lg border border-border bg-card-bg p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground-strong">
              Feeding a Crowd?
            </h2>
            <p className="mt-3 text-foreground-muted">
              We cater events from 10 to 100+ people. Same slow-smoked quality, scaled up for your
              gathering.
            </p>
            <Link
              href="/catering"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover"
            >
              View Catering Packages
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
