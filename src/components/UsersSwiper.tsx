"use client";

import { Icons } from "@/components/Icons";
import { User } from "@/data/members";
import useMounted from "@/hooks/useMounted";
import { cn, openInNewTab } from "@/libs/utils";
import { JapaneseYen, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const UsersSwiper = ({ users }: { users: User[] }) => {
  const isMounted = useMounted();
  if (!isMounted) return null;
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
      >
        {users.map((member) => (
          <SwiperSlide key={member.id}>
            <div
              className={cn("flex flex-col space-y-4 overflow-hidden", "pb-8")}
            >
              <div className="relative h-80">
                <Image
                  priority
                  src={member.img}
                  data-src={member.img}
                  fill
                  className="object-cover"
                  alt={`Profile photo of ${member.name}`}
                  quality={30}
                />
              </div>
              <div className="flex flex-col space-y-2 h-48">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold">{member.name}</h3>
                    {(member.korean || member.japanese || member.us) && (
                      <div className="flex space-x-2">
                        {member.korean && (
                          <Image
                            src="/img/korea.svg"
                            width={24}
                            height={24}
                            alt="korea flag"
                            className="w-6 h-4 border"
                          />
                        )}
                        {member.japanese && (
                          <Image
                            src="/img/japan.svg"
                            width={24}
                            height={12}
                            alt="japan flag"
                            className="w-6 h-4 border"
                          />
                        )}
                        {member.us && (
                          <Image
                            src="/img/us.svg"
                            width={24}
                            height={12}
                            alt="japan flag"
                            className="w-6 h-4 border"
                          />
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-slate-700">{member.team}</p>
                  <p className="text-sm text-slate-700">{member.role}</p>
                </div>
                {member?.description && (
                  <p className="text-sm h-32 overflow-scroll hide-scrollbar whitespace-break-spaces">
                    {member.description}
                  </p>
                )}
              </div>
              <div className="flex space-x-2 h-6">
                {member?.twitter && (
                  <Twitter
                    tabIndex={0}
                    role="button"
                    aria-label={`Visit ${member.name}'s Twitter profile`}
                    className={cn("w-4 h-4 cursor-pointer text-slate-800")}
                    onClick={() => openInNewTab(member.twitter!)}
                  />
                )}
                {member?.linkedin && (
                  <LinkedinIcon
                    tabIndex={0}
                    role="button"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    className={cn("w-4 h-4 cursor-pointer text-slate-800")}
                    onClick={() => openInNewTab(member.linkedin!)}
                  />
                )}
                {member?.github && (
                  <Icons.github
                    tabIndex={0}
                    role="button"
                    aria-label={`Visit ${member.name}'s GitHub profile`}
                    className={cn("w-4 h-4 cursor-pointer text-slate-800")}
                    onClick={() => openInNewTab(member.github!)}
                  />
                )}
                {member.zenn && (
                  <Icons.zenn
                    tabIndex={0}
                    role="button"
                    aria-label={`Visit ${member.name}'s Zenn profile`}
                    className={cn("w-4 h-4 cursor-pointer text-slate-800")}
                    onClick={() => openInNewTab(member.zenn!)}
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UsersSwiper;
