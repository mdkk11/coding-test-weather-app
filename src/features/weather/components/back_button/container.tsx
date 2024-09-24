import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { useLinkProps } from "@/hooks"

import { Presenter, PresenterProps } from "./presenter"

export const Container = () => {
  const navigate = useNavigate()
  const { generateLinkProps } = useLinkProps()

  const presenterProps = {
    children: (
      <>
        <ArrowLeft />
        戻る
      </>
    ),
    onClick: () => navigate(generateLinkProps({ pathname: "/", removeParams: ["date"] }).to),
  } satisfies PresenterProps

  return <Presenter {...presenterProps} />
}
