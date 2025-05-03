import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import sampleData from "@/db/traversy-sample-data";

const HomePage = () => {
  console.log("log data is ", sampleData);

  // todo should be an array of type Product
  let limitedData: any[];
  let showData = true;
  if (sampleData.products.length > 0) {
    limitedData = sampleData.products.slice(0, 4);
  } else {
    showData = false;
  }

  return (
    <div>
      <p>
        Currently we&apos;re importing sample data from a
        /db/traversy-sample-data.ts file.
      </p>

      {/* // this is what the product-list component was */}
      {/* // my-10: margin top and bottom of ProductList component of 40px */}
      <div className="my-10">
        {/* same as: font-bold text-2xl lg:text-3xl; */}
        {/* mb-4: margin bottom of Title to stuff under it 16px */}
        <h2 className="font-bold text-2xl lg:text-3xl mb-4">Top Recipes</h2>
        {showData ? (
          // make different number of columns for different screen sizes
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limitedData!.map((product: any) => (

              // This is what ProductCard was
              // <div key={product.slug}>{product.name}</div>
              // Full width with a maximum width of 24rem (sm)
              <Card className="w-full max-w-sm" key={product.slug}>
                {/* No padding, center items along cross axis  */}
                <CardHeader className="p-0 items-center">
                  {/* Link to product page */}
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      priority={true}
                      // first image in the images array if it exists
                      src={product.images![0]}
                      alt={product.name}
                      //   aspect-square: 1:1 aspect ratio
                      //   object-cover: resize image to cover container while maintaining aspect ratio
                      //   rounded: border radius for rounded corners
                      className="aspect-square object-cover rounded"
                      height={300}
                      width={300}
                    />
                  </Link>
                </CardHeader>

                <CardContent className="p-4 grid gap-4">
                  {/* Brand eg Polo, Brooks Brothers */}
                  <div className="text-xs">{product.brand}</div>

                  {/* Product name eg Polo Sporting Stretch Shirt */}
                  <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                  </Link>

                  {/* Rating and price */}
                  {/* between puts 2 p tags on same line */}
                  <div className="flex justify-between items-center gap-4">
                    <p>{product.rating} stars</p>
                    {product.stock > 0 ? (
                      <p className="font-bold">${product.price}</p>
                    ) : (
                      <p className="text-destructive">Out of Stock</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <p>No product found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
