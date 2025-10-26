import { Card, CardContent } from "./ui/card";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="hover-lift transition-all duration-300 border-2 hover:border-primary/50 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
