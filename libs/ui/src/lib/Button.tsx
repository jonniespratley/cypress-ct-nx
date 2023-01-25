import { ComponentPropsWithRef } from "react";

export function Button(props: ComponentPropsWithRef<'button'>) {
  return <button className="btn" {...props}/>
}
