import ListElement from "@/components/list_element/ListElement";
import StateHook from "./_components/StateHook";
import EffectHook from "./_components/EffectHook";
import FormStatusHook from "./_components/FormStatusHook";
import RefLayoutEffectHook from "./_components/RefLayoutEffectHook";
import ContextReducerHook from "./_components/ContextReducerHook";
import CallbackHook from "./_components/CallbackHook";
import MemoHook from "./_components/MemoHook";

export default function HooksPage() {
  return (
    <>
      <ListElement title="useState">
        <StateHook/>
      </ListElement>
      <ListElement title="useContext + useReducer" children={<ContextReducerHook/>}/>
      <ListElement title="useFormStatus" children={<FormStatusHook/>}/>
      <ListElement title="useEffect" children={<EffectHook/>}/>
      <ListElement title="useLayoutEffect + useRef" children={<RefLayoutEffectHook/>}/>
      <ListElement title="useCallback" children={<CallbackHook/>}/>
      <ListElement title="useMemo" children={<MemoHook/>}/>
      <footer style={{height: 500}}/>
    </>
  );
}