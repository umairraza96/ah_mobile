import {Heading} from 'native-base';
import {IterfaceHeadingProps} from 'native-base/lib/typescript/components/primitives/Heading/types';

interface AMHeadingProps extends IterfaceHeadingProps {
  title: string;
  subTitle?: string;
  action?: () => void;
}

const AMHeading = ({
  title,
  subTitle,
  action,
  ...otherProps
}: AMHeadingProps) => {
  return (
    <Heading {...otherProps} size="lg">
      {title}
    </Heading>
  );
};

export default AMHeading;
