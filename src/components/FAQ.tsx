import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div id="faqs" className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 px-10 lg:px-40">
      <div className="lg:w-[70%] space-y-5">
        <div className="text-navy-blue text-[16px] font-[500] bg-[#0A0F2C08] px-2 py-1 rounded-[12px] w-fit">
          Got Questions?
        </div>
        <p className="text-[20px] lg:text-[49px] font-semibold leading-[130%]">
          Frequently Asked Questions
        </p>
        <p className="text-[14px] lg:text-[16px] text-[#66707F]">
          If you have any further questions, please don't hesitate to reach out
          to our customer support team for assistance.
        </p>
      </div>

      {/* Accordion Section */}
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is SwapXnext</AccordionTrigger>
            <AccordionContent>
              SwapXnext is our fast and secure crypto-to-naira exchange service
              that allows you to convert supported cryptocurrencies, like
              Bitcoin, Ethereum, or USDT, directly into Nigerian Naira and
              receive the payout straight to your bank account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-5">
            <AccordionTrigger>
              Is there a minimum amount to convert?
            </AccordionTrigger>
            <AccordionContent>
              SwapXnext is our fast and secure crypto-to-naira exchange service
              that allows you to convert supported cryptocurrencies, like
              Bitcoin, Ethereum, or USDT, directly into Nigerian Naira and
              receive the payout straight to your bank account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mt-5">
            <AccordionTrigger>Is SwapXnext secure?</AccordionTrigger>
            <AccordionContent>
              SwapXnext is our fast and secure crypto-to-naira exchange service
              that allows you to convert supported cryptocurrencies, like
              Bitcoin, Ethereum, or USDT, directly into Nigerian Naira and
              receive the payout straight to your bank account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mt-5">
            <AccordionTrigger>What cryptos are supported?</AccordionTrigger>
            <AccordionContent>
              SwapXnext is our fast and secure crypto-to-naira exchange service
              that allows you to convert supported cryptocurrencies, like
              Bitcoin, Ethereum, or USDT, directly into Nigerian Naira and
              receive the payout straight to your bank account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="mt-5">
            <AccordionTrigger>How long do payouts take?</AccordionTrigger>
            <AccordionContent>
              SwapXnext is our fast and secure crypto-to-naira exchange service
              that allows you to convert supported cryptocurrencies, like
              Bitcoin, Ethereum, or USDT, directly into Nigerian Naira and
              receive the payout straight to your bank account.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
