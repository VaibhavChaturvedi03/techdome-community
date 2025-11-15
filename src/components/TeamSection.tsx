import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const team = [
    {
      name: "Vivek Mathur",
      role: "Community Lead",
      image: "/vivek.jpeg",
      linkedin: "https://www.linkedin.com/in/vivek-mathur9310/",
    },
    {
      name: "Pratham Jain",
      role: "Technical Director",
      image: "/pratham.jpeg",
      linkedin: "https://www.linkedin.com/in/pratham-jain-dev/",
    },
    {
      name: "Ujjwal Yadav",
      role: "Events Coordinator",
      image: "/ujjwal.jpg",
      linkedin: "https://www.linkedin.com/m/in/-uyadav",
    },
    {
      name: "Pushpdeep Saini",
      role: "Design Lead",
      image: "/pushpdeep.jpeg",
      linkedin: "https://www.linkedin.com/in/pushpdeep-saini-3528a9263/",
    },
    {
      name : "Vaibhav chaturevedi",
      role : "Event coordinator",
      image : "/vaibhav.jpeg",
      linkedin: "https://www.linkedin.com/in/vaibhav-chaturvedi-5772b0333/"
    }
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient uppercase tracking-wider">
            Meet The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to building an amazing tech community.
          </p>
        </div>

        {/* Animated carousel container */}
        <div className="relative overflow-hidden py-12">
          <div className="flex gap-8 justify-center flex-wrap">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative w-80 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:card-glow backdrop-blur-sm"
                style={{
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                {/* Circular image container */}
                <div className="relative mx-auto mb-6 w-56 h-56 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Role badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-2 bg-secondary/80 rounded-full text-xs font-medium backdrop-blur-sm max-w-[120px] text-center">
                    {member.role}
                  </div>
                </div>

                {/* Member info */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>

                {/* Connect button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-semibold"
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
