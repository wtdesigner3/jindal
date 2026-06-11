import React from 'react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${formattedTitle} | Jindal Metals & Alloys Ltd`,
    description: `Technical specifications, sizing, grades, and tolerances for ${formattedTitle}.`,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container py-5" style={{ minHeight: '60vh' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 py-5">
          <h1 className="mb-4">{formattedTitle}</h1>
          <p className="lead">
            Detailed specifications, dimensions, and grades for {formattedTitle}.
          </p>
          <div className="mt-4 p-4 bg-light border rounded">
            <h5>Technical Overview</h5>
            <p>
              Jindal Metals & Alloys Ltd produces high-quality {formattedTitle} with advanced manufacturing technologies. Our materials are tested to ensure maximum durability, precise tolerances, and compatibility with international industrial standards.
            </p>
            <p className="mb-0">
              For custom requirements or specific grades, please reach out to our engineering team through our contact section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
