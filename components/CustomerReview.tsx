import React from "react";

function CustomerReview() {
  return (
    <section className="mx-auto mb-20  flex flex-1 flex-col gap-10 ">
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
        What Our Customers Say
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="rounded-md p-3 shadow-md">
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {"Great products and fast delivery. I'm very satisfied."}
          </p>
        </div>
        <div className="rounded-md p-3 shadow-md">
          <h3 className="text-lg font-bold">Jane Smith</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {"Excellent customer service. They resolved my issue quickly."}
          </p>
        </div>
        <div className="rounded-md p-3 shadow-md">
          <h3 className="text-lg font-bold">Robert Johnson</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {"I love shopping here. They always have what I need."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;
