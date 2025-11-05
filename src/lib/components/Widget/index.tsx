type WidgetProps = {
    dataSource: string;
    type: string;
};
const Widget = ({ dataSource, type }: WidgetProps) => {

    return <>Type: {type}</>;
};

export default Widget;
