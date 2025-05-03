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
      Currently we&apos;re importing sample data from a /db/traversy-sample-data.ts file.
    </p>

    {/* // this is what the product-list component was */}
    {/* // my-10: margin top and bottom of ProductList component of 40px */}
    <div className="my-10">
      {/* h2-bold: custom heading class */}
      {/* same as: font-bold text-2xl lg:text-3xl; */}

      {/* mb-4: margin bottom of Title to stuff under it 16px */}
      <h2 className="h2-bold mb-4">Title</h2>
      {showData ? (
        // make different number of columns for different screen sizes
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData!.map((product: any) => (
            // React needs a unique key to identify each element in a list
            // <ProductCard key={product.slug} product={product} />
            <div key={product.slug}>{product.name}</div>
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
