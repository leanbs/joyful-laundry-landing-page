import { sendEventTracker } from "@/utils/analytics/tracker";
import { useRouter } from "next/router";

const Announcement = () => {
  const router = useRouter();
  return (
    <aside className="p-3 text-center text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <a className="text-sm font-medium underline underline-offset-1" onClick={() => {
          sendEventTracker({
            name: 'click',
            category: `${router.pathname} - announcement`,
            label: 'joyful covid protocol',
          })
          router.push('/announcement/health-protocol-covid')
        }}>
          Pelajari bagaimana Joyful Laundry menjaga pelanggan dan karyawan agar tetap aman selama masa pandemi COVID-19 disini &rarr;
        </a>
    </aside>
  );
};

export default Announcement;
