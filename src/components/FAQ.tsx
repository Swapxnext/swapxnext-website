import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div
      id="faqs"
      className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 px-10 lg:px-40">
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
              SwapXnext lets you turn crypto into local cash in a few taps.
              Choose an asset, see your rate and fees upfront, send to your
              unique address, then receive payout to your bank account once the
              transfer is confirmed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-5">
            <AccordionTrigger>
              Is there a minimum amount to convert?
            </AccordionTrigger>
            <AccordionContent>
              Yes. minimum amount for swaps to naira is 1,000 NGN
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mt-5">
            <AccordionTrigger>Is SwapXnext secure?</AccordionTrigger>
            <AccordionContent>
              We protect accounts with bank grade encryption and optional two
              factor authentication. Deposit addresses are unique per order and
              every payout is reviewed by automated fraud checks. We follow
              standard KYC requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mt-5">
            <AccordionTrigger>What cryptos are supported?</AccordionTrigger>
            <AccordionContent>
              We support the most used options for off ramping, including USDT,
              USDC, BTC, and ETH. The full list, plus supported networks, is
              shown in the app and is updated as we add new assets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="mt-5">
            <AccordionTrigger>How long do payouts take?</AccordionTrigger>
            <AccordionContent>
              Most payouts arrive within minutes after the required on chain
              confirmations during banking hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
