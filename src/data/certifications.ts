export interface Certification {
  name: string;
  issuer?: string;
  url?: string; // link milne ke baad yahan add karna
}

export const certifications: Certification[] = [
  { name: "Empowering the world with AI", url: "https://www.coursera.org/account/accomplishments/verify/GS29K66GHUI3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
  { name: "SCRUM Fundamental Certified", url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=976579"},
  { name: "Certified PHP Fundamentals", url: "https://drive.google.com/file/d/1VRrgACIuK3Hlne8UYAOhCcsTs4t2wRxk/view" },
  { name: "Responsive Web Design", url: "https://www.sololearn.com/en/certificates/CT-5LQAGLEU" },
];