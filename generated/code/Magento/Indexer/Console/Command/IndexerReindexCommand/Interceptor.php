<?php
namespace Magento\Indexer\Console\Command\IndexerReindexCommand;

/**
 * Interceptor class for @see \Magento\Indexer\Console\Command\IndexerReindexCommand
 */
class Interceptor extends \Magento\Indexer\Console\Command\IndexerReindexCommand implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\App\ObjectManagerFactory $objectManagerFactory, ?\Magento\Framework\Indexer\IndexerRegistry $indexerRegistry = null, ?\Magento\Framework\Indexer\Config\DependencyInfoProvider $dependencyInfoProvider = null)
    {
        $this->___init();
        parent::__construct($objectManagerFactory, $indexerRegistry, $dependencyInfoProvider);
    }

    /**
     * {@inheritdoc}
     */
    public function run(\Symfony\Component\Console\Input\InputInterface $input, \Symfony\Component\Console\Output\OutputInterface $output)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'run');
        if (!$pluginInfo) {
            return parent::run($input, $output);
        } else {
            return $this->___callPlugins('run', func_get_args(), $pluginInfo);
        }
    }
}
