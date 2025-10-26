const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-primary ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
