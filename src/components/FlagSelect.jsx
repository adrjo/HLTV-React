import { Select } from "@headlessui/react"
import { Flag } from "../util/Flag"

// country flag selection component (used in PostForm)
export function FlagSelect({ flag, setFlag }) {
    const selectFlag = (code) => {
        const flag = Object.values(Flag).find((f) => f.code === code)
        if (flag) {
            setFlag(flag) // pass the whole object back
        }
    }

    return (
        <Select name="flag" aria-label="flag" value={flag?.code ?? ""} onChange={(e) => selectFlag(e.target.value)}>
            <option value="" disabled>-- Select a flag --</option>
            {Object.values(Flag).map((f) => (
                <option key={f.code} value={f.code}>{f.code + " " + f.name}</option>
            ))}
        </Select>
    )
}