import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0xBA12222222228d8Ba445958a75a0704d566BF2C8';

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
    [Network.MAINNET]: {
        chainId: Network.MAINNET, //1
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
        },
        pools: {
            staBal3Pool: {
                id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
                address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
            },
        },
    },
    [Network.POLYGON]: {
        chainId: Network.POLYGON, //137
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0xa1B2b503959aedD81512C37e9dce48164ec6a94d',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
        },
        pools: {},
    },
    [Network.ARBITRUM]: {
        chainId: Network.ARBITRUM, //42161
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x269ff446d9892c9e19082564df3f5e8741e190a1',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
        },
        pools: {},
    },
    [Network.KOVAN]: {
        chainId: Network.KOVAN, //42
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2',
        },
        pools: {
            staBal3Pool: {
                id: '0x8fd162f338b770f7e879030830cde9173367f3010000000000000000000004d8',
                address: '0x8fd162f338b770f7e879030830cde9173367f301',
            },
            wethStaBal3: {
                id: '0x6be79a54f119dbf9e8ebd9ded8c5bd49205bc62d00020000000000000000033c',
                address: '0x6be79a54f119dbf9e8ebd9ded8c5bd49205bc62d',
            },
        },
    },
    [Network.ROPSTEN]: {
        chainId: Network.ROPSTEN, //3
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
            },
        },
        urls: {
            subgraph: '',
        },
        pools: {},
    },
    [Network.RINKEBY]: {
        chainId: Network.RINKEBY, //4
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-rinkeby-v2',
        },
        pools: {},
    },
    [Network.GÖRLI]: {
        chainId: Network.GÖRLI, //5
        addresses: {
            contracts: {
                vault: '0x65748E8287Ce4B9E6D83EE853431958851550311',
                multicall: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-goerli-v2',
        },
        pools: {},
    },
    [Network.FUJI]: {
        chainId: Network.FUJI, //
        addresses: {
            contracts: {
                vault: '0xf2BAaF9D8B4B0CFb19d46Ac9FFb8102e5930fadE',
                multicall: '0x63efc53135e1FBdae928F3FeD464c4940e8a0016',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/hexagonfinance/hexagon-fuji-subgraph',
        },
        pools: {},
    },
    [Network.AVALANCHE]: {
        chainId: Network.AVALANCHE, //
        addresses: {
            contracts: {
                vault: '0x31cBbfcE5ec5eE28d57197433Af8E7A87d14c5c5', // TODO: need update
                multicall: '0xA4726706935901fe7dd0F23Cf5D4fb19867dfc88',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/hexagonfinance/hexagon-subgraph',  // TODO: need update
        },
        pools: {},
    },
};
