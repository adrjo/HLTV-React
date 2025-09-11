import { Select } from "@headlessui/react"
import { Flag } from "../util/Flag"

export function FlagSelect({ setFlag }) {
        const selectFlag = (code) => {
        const flag = Object.values(Flag).find((f) => f.code === code)
        if (flag) {
            setFlag(flag) // pass the whole object back
        }
    }

    return (
        <Select name="flag" aria-label="flag" onChange={(e) => selectFlag(e.target.value)}>
            {Object.values(Flag).map((f) => (
                <option key={f.code} value={f.code}>{f.code + " " + f.name}</option>
            ))}
        </Select>
    )
}