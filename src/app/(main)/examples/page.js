import ListElement from "@/components/list_element/ListElement";
import ScrollList from "./_components/ScrollList";
import ClickOutside from "./_components/ClickOutside";

export default function ExamplesPage() {
  return (
    <>
      <ListElement title="Scrollable list with popups" children={<ScrollList/>}/>
      <ListElement title="Own hook - useComponentVisible" children={<ClickOutside/>}/>
      <footer style={{height: 500}}/>
    </>
  );
}