import Link from "next/link";

import { FaTwitter, FaGithub } from "react-icons/fa";

import { Stack } from "@/components/ui/layout/Stack";

export const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="mx-auto flex max-w-screen-sm justify-center p-4">
        <Stack>
          <div className="flex justify-center gap-6">
            <Link href="https://github.com/andraindrops/polymo">
              <a>
                <FaGithub size="2em" />
              </a>
            </Link>
            <Link href="https://twitter.com/polymo_dev">
              <a>
                <FaTwitter size="2em" />
              </a>
            </Link>
          </div>
          <div>&copy; Polymo 2022 All Rights Reserved.</div>
        </Stack>
      </div>
    </div>
  );
};
