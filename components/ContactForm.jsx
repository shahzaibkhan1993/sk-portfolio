import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from 'emailjs-com';

const ContactForm = ({ isDialogOpen, onClose }) => {
  const emailjs_serviceID='service_lobarss';
  const emailjs_templateID='template_liiu9zs';
  const emailjs_publicKey='7qcAT2KbVqC-u6vGN';

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    console.log('EmailJS Service ID:', emailjs_serviceID);
    console.log('EmailJS Template ID:', emailjs_templateID);
    console.log('EmailJS User ID:', emailjs_publicKey);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      console.log('Sending email with the following parameters:', templateParams);

      const response = await emailjs.send(
        emailjs_serviceID,
        emailjs_templateID,
        templateParams,
        emailjs_publicKey
      );

      console.log('EmailJS response:', response);
      toast.success('Message sent successfully');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error(`Failed to send message. ${error.text}`);
    }
  };

  return (
    <div className="container mx-auto">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[100%] order-2 xl:order-none">
          <form className="flex flex-col gap-2 p-10 bg-slate-800 rounded-xl" onSubmit={handleSubmit}>
            {isDialogOpen && (
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  className="text-2xl font-semibold flex items-center text-white/60 hover:text-accent "
                  onClick={onClose}
                >
                  X
                </button>
              </div>
            )}

            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">Have a project in mind that needs a skilled and passionate developer? I&apos;m eager to collaborate and bring your ideas to life! With a strong foundation in various technologies and a dedication to user-centric solutions, I&apos;m confident we can create something truly impactful. Feel free to reach out and let&apos;s discuss how I can help make your vision a reality.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Firstname" required />
              <Input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Lastname" required />
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              <Input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required />
            </div>

            <Select onValueChange={handleSelectChange} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" value={formData.service} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="web development">Web Development</SelectItem>
                  <SelectItem value="mobile development">Mobile Development</SelectItem>
                  <SelectItem value="ui ux">UI/UX Design</SelectItem>
                  <SelectItem value="data analysis & visualization">Data Analysis & Visualization</SelectItem>
                  <SelectItem value="documentation & technical writing">Software Documentation & Technical Writing</SelectItem>
                  <SelectItem value="gen ai development">Gen AI Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea className="h-[200px]" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here." required />

            <Button type="submit" className="max-w-40">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
