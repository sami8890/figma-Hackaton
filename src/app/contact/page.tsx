import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Banner from "@/components/ui/banner";
import FeaturesSection from "@/components/ui/why-choose-us";

export default function ContactPage() {
  return (
    <section>
     <div>
      <Banner
        backgroundImage="/shop/image.png"
        title="Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        logo="/navbar-logo.png" 
      />
    </div>


    <div className="container mx-auto px-4 py-16 max-w-6xl bg-gray-200">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Address</h3>
              <p className="text-muted-foreground">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Phone</h3>
              <p className="text-muted-foreground">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="h-6 w-6 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Working Time</h3>
              <p className="text-muted-foreground">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" placeholder="Abc" className="h-12 px-4" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className="h-12 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="This is an optional"
                className="h-12 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Hi! I'd like to ask about"
                className="min-h-[160px] px-4 py-3"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#B88A44] hover:bg-[#A67934] text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
        <FeaturesSection/>
    </div>
    </section>
  );
}
