import PriceOption from "../PrioceOption/PriceOption";

const PriceOptions = () => {

    
       const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Limited access to group fitness classes",
              "No access to personal training",
              "Locker room access",
              "Free water and towel service"
            ],
            "price": 30
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Full access to gym facilities",
              "Access to all group fitness classes",
              "Discounts on personal training sessions",
              "Locker room access",
              "Free water and towel service",
              "Access to sauna and steam room"
            ],
            "price": 50
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Full access to gym facilities",
              "Access to all group fitness classes",
              "Unlimited personal training sessions",
              "Locker room access",
              "Free water and towel service",
              "Access to sauna and steam room",
              "Nutritional counseling sessions",
              "Complimentary smoothies"
            ],
            "price": 80
          }
        ]
    
      
    return (
        <div className="m-12">
            <h2 className="text-5xl text-center my-10">Best Price in town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;