import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaUserTie,
  FaGraduationCap,
  FaChartLine,
  FaTrophy,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaHeart,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const metadata = {
  title: "About Nifty Nitesh - Leading Online Trading Education Platform",
  description:
    "Learn about Nifty Nitesh, a premier online trading education platform offering comprehensive courses on technical analysis, fundamental analysis, and trading strategies. Transform your trading journey with expert guidance.",
  keywords: [
    "online trading education",
    "stock market courses online",
    "trading institute",
    "technical analysis training",
    "fundamental analysis courses",
    "trading mentorship",
    "stock market education platform",
    "professional trading courses",
    "nifty nitesh about",
    "trading expert",
  ],
  openGraph: {
    title: "About Nifty Nitesh - Leading Online Trading Education Platform",
    description:
      "Learn about Nifty Nitesh, a premier online trading education platform offering comprehensive courses on technical analysis, fundamental analysis, and trading strategies.",
    images: [
      {
        url: "/about.jpeg",
        width: 1200,
        height: 630,
        alt: "About Nifty Nitesh",
      },
    ],
  },
};

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Nitesh Kumar",
      role: "Founder & Chief Trading Strategist",
      image: "/about.jpeg",
      bio: "With over 8+ years in the financial markets, Nitesh has helped 500+ students master the art of trading.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const achievements = [
    {
      icon: FaUsers,
      number: "500+",
      label: "Students Trained",
      description: "Successfully mentored traders across India",
    },
    {
      icon: FaTrophy,
      number: "95%",
      label: "Success Rate",
      description: "Students achieving profitable trading",
    },
    {
      icon: FaChartLine,
      number: "8+",
      label: "Years Experience",
      description: "Deep market expertise and analysis",
    },
    {
      icon: FaGraduationCap,
      number: "100+",
      label: "Live Sessions",
      description: "Interactive learning experiences",
    },
  ];

  const values = [
    {
      icon: FaBullseye,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of trading education, ensuring our students receive world-class training.",
    },
    {
      icon: FaRocket,
      title: "Innovation",
      description:
        "Constantly evolving our teaching methods and incorporating latest market trends and technologies.",
    },
    {
      icon: FaHeart,
      title: "Integrity",
      description:
        "Building trust through transparent teaching, honest guidance, and ethical trading practices.",
    },
    {
      icon: FaUsers,
      title: "Community",
      description:
        "Fostering a supportive learning community where traders help each other grow and succeed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              ABOUT NIFTY NITESH
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transforming{" "}
              <span className="gradient-text">Trading Education</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto text-balance">
              Empowering traders with comprehensive online education, expert
              mentorship, and proven strategies for sustainable market success.
            </p>
          </div>

          {/* Main Image */}
          <div className="relative max-w-4xl mx-auto mb-20 animate-slide-up">
            <div className="glass-card p-8">
              <Image
                src="/about.jpeg"
                alt="Nifty Nitesh Trading Education"
                width={1200}
                height={600}
                className="w-full h-96 object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-sm bg-bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg leading-relaxed">
                  Nifty Nitesh began with a simple yet powerful vision: to
                  democratize trading education and make professional-grade
                  market knowledge accessible to everyone. Our journey started
                  with a passion for empowering individuals with the skills and
                  strategies needed to succeed in the dynamic world of stock
                  trading.
                </p>
                <p className="text-lg leading-relaxed">
                  From humble beginnings to becoming a trusted name in trading
                  education, we've consistently focused on delivering value
                  through comprehensive courses, personalized mentorship, and a
                  community-driven approach to learning.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to have transformed the careers of 500+
                  traders across India, with our students consistently achieving
                  profitable results and building sustainable trading careers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-up">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-6 text-center group">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2 group-hover:glow-text transition-all">
                    {achievement.number}
                  </div>
                  <div className="text-text-primary font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-text-muted text-sm">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="glass-card p-8 animate-slide-up">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <FaBullseye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                To provide world-class trading education through innovative
                online courses, practical mentorship, and comprehensive support
                systems that enable our students to achieve consistent
                profitability and long-term financial success in the stock
                market.
              </p>
            </div>

            <div className="glass-card p-8 animate-slide-up">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                To become India's most trusted and comprehensive online trading
                education platform, fostering a new generation of confident,
                knowledgeable, and successful traders who contribute to the
                growth of the financial markets ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-sm bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Meet Our <span className="gradient-text">Expert</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Learn from industry professionals with proven track records in
              trading and education.
            </p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card p-8 max-w-md animate-slide-up"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-accent/20"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <FaUserTie className="w-4 h-4 text-primary-dark" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-secondary mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5 text-accent" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors"
                    >
                      <FaTwitter className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
              as an organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="feature-card text-center group animate-slide-up"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-sm bg-bg-secondary">
        <div className="container">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Ready to Transform Your{" "}
              <span className="gradient-text">Trading Journey?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who have transformed their
              careers with our expert guidance and comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/online-classes">
                <Button className="btn-primary px-8 py-4 text-lg">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-secondary px-8 py-4 text-lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
