import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  Title,
} from '@mantine/core';
import {
  IconTruck,
  IconCertificate,
  IconCoin,
  TablerIcon,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  titleText: {
    color: theme.black,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
      .color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: TablerIcon;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconCertificate,
    title: 'Jadwalkan cucian anda setiap hari',
    description:
      'Beritahu kami melalui Whatsapp. dan kurir kami akan datang menjemput cucian Anda di jam tertentu.',
  },
  {
    icon: IconCoin,
    title: 'Nikmati waktu bebas Anda',
    description:
      'Nikmati 4 jam waktu luang setiap minggu dan perawatan baju Anda ke karyawan kami.',
  },
  {
    icon: IconCoin,
    title: 'Bersantai dengan sistem antar jemput langsung di pintu Anda',
    description:
      'Kami mengantarkan baju Anda bersih, rapi, dan siap digunakan.',
  },
];

const Special = () => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  const useStyles = createStyles((theme) => ({
    title: {
      color: theme.black,
      fontSize: 30,
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: 32,

      [theme.fn.smallerThan('sm')]: {
        fontSize: 20,
        lineHeight: 1.2,
      },

      [theme.fn.smallerThan('xs')]: {
        fontSize: 20,
        lineHeight: 1.3,
      },
    },
  }));

  const { classes } = useStyles();

  return (
    <Container mt={30} mb={30} pt={56} pb={56} size="lg">
      <Title className={classes.title}>
        Apa yang membuat kami spesial?
        <br />
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Kamu dirumah aja biar kami yang jemput cucian kamu.
        </Text>{' '}
      </Title>
      <SimpleGrid
        cols={3}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        spacing={50}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};

export default Special;
